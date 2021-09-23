import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import zipcodes from "zipcodes";

const SALT_ROUNDS = 11;
const TOKEN_KEY = process.env.TOKEN_KEY || "willchangelater";

const today = new Date();
const exp = new Date(today);
exp.setDate(today.getDate() + 5);

export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, parseInt(SALT_ROUNDS));
    let zipcode = req.body.location;
    let zipcodeData = zipcodes.lookup(zipcode);
    let location = {
      latitude: zipcodeData.latitude,
      longitude: zipcodeData.longitude,
    };

    const user = new User({
      email,
      username,
      password_digest,
      location,
    });
    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      exp: parseInt(exp.getTime() / 1000),
    };

    const token = jwt.sign(payload, TOKEN_KEY);

    res.status(201).json({ userId: user._id, username: user.username, location: user.location, token });
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).select(
      "email username password_digest location"
    );

    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        exp: parseInt(exp.getTime() / 1000),
      };
      const token = jwt.sign(payload, TOKEN_KEY);

      res.status(201).json({ userId: user._id, username: user.username, location: user.location, token });
    } else {
      res.status(401).json({ error: "Invalid Credentials" });
    }
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);

    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).json({ error: "Not Authorized" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.user;
    const { body } = req;
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    let zipcode = req.body.location;
    let zipcodeData = zipcodes.lookup(zipcode);
    user.location = {
      latitude: zipcodeData.latitude,
      longitude: zipcodeData.longitude,
    };
    await user.save();
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: "Cannot be updated" });
    }
  } catch (e) {
    res.status(404).json({ error: e.message });
  }
};
