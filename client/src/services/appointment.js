import api from "./api-config"

export const getAllAppointments = async (id) => {
    try {
        let res = await api.get(`/api/appointments`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
}; 

export const getAppointments = async (id) => {
    try {
        let res = await api.get(`/api/appointments/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const getAppointment = async (id) => {
    try {
        let res = await api.get(`/api/appointment/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const postAppointment = async (createdData) => {
    try {
        let res = await api.post("/api/appointment", createdData);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const putAppointment = async (id, updatedData) => {
    try {
        let res = await api.put(`/api/appointment/${id}`, updatedData);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};

export const deleteAppointment = async (id) => {
    try {
        let res = await api.delete(`/api/appointment/${id}`);
        return res.data;
    } catch (e) {
        return ({ errors: e });
    };
};