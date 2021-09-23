import api from "./api-config"

export const getPets = async () => {
    try {
        let res = await api.get("/api/pets");
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const getPet = async (id) => {
    try {
        let res = await api.get(`/api/pets${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const postPet = async (createdData) => {
    try {
        console.log(createdData)
        let res = await api.post("/api/pets", createdData);
        console.log(res)
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const putPet = async (id, updatedData) => {
    try {
        let res = await api.put(`/api/pets/${id}`, updatedData);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const deletePet = async (id) => {
    try {
        let res = await api.delete(`/api/pets/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};