import api from "./api-config"

export const getPets = async () => {
    try {
        let res = await api.get("/pets");
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const getPet = async (id) => {
    try {
        let res = await api.get(`/pets${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const postPet = async (createdData) => {
    try {
        let res = await api.post("/pets", createdData);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const putPet = async (id, updatedData) => {
    try {
        let res = await api.put(`/pets/${id}`, updatedData);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const deletePet = async (id) => {
    try {
        let res = await api.delete(`/pets/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};