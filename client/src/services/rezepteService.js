import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/data/rezepte'

export const getAll = async () => {
const result = await request.get(`${baseUrl}?sortBy=date`);

return result;
};

export const getAllMyRezepte = async (ownerId) => {
    const result = await request.get(`${baseUrl}?sortBy=date&where=_ownerId%3D%22${ownerId}%22`);
  
    return result
    };

export const getLastSix = async () => {
    const result = await request.get(`${baseUrl}?sortBy=date&pageSize=6`);
    console.log(result)
    return result;
    };

export const getOne = async (rezepteId) => {
    const result = await request.get(`${baseUrl}/${rezepteId}`);

    return result;
}



export const create = async (rezepteData, token) => {
    const result = await request.post(baseUrl, rezepteData, token);

    return result;
}

export const edit = async (rezepteId, rezepteData, token) => {
    const result = await request.put(`${baseUrl}/${rezepteId}`, rezepteData, token);

    return result;
}

export const remove = async (rezepteId, token) => {
    const result =   request.remove(`${baseUrl}/${rezepteId}`, null, token);
  
      return result;
  }
