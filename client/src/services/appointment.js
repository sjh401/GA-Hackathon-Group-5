import api from "./api-config";

export const getAppointments = async () => {
  try {
    let res = await api.get("/appointment");
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const getAllAppointments = async (id) => {
    try {
        let res = await api.get(`/api/appointments`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
}; 

export const getAppointment = async (id) => {
  try {
    let res = await api.get(`/api/appointment${id}`);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const postAppointment = async (createdData) => {
  try {
    let res = await api.post("/api/appointment", createdData);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const putAppointment = async (id, updatedData) => {
  try {
    let res = await api.put(`/api/appointment/${id}`, updatedData);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const deleteAppointment = async (id) => {
  try {
    let res = await api.delete(`/api/appointment/${id}`);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const getAllGroomers = async (id) => {
  try {
    let res = await api.get(`/api/findgroomer`);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const getAllVets = async (id) => {
  try {
    let res = await api.get(`/api/findvet`);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};

export const getAllBoarding = async (id) => {
  try {
    let res = await api.get(`/api/findboarding`);
    return res.data;
  } catch (e) {
    return { errors: e };
  }
};
