import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/data/rezepte'

export const getAll = async () => {
const result = await request.get(baseUrl);

return result;
};

export const getOne = async (rezepteId) => {
    const result = await request.get(`${baseUrl}/${rezepteId}`);

    return result;
}



export const create = async (rezepteData) => {
    const result = await request.post(baseUrl, rezepteData);

    return result;
}



