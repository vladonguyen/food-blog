import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/blog';

export const getAll = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc`);
    return result
};

export const getAllMyBlog = async (ownerId) => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&where=_ownerId%3D%22${ownerId}%22`);
    return result
};

export const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);
    return result
}

export const getLastTwo = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn%20desc&pageSize=2`);
    console.log(result)
    return result;
};

export const create = async (blogData, token) => {
    const result = await request.post(baseUrl, blogData, token);

    return result
}

export const edit = async (blogId, blogData, token) => {
    const result = await request.put(`${baseUrl}/${blogId}`, blogData, token);

    return result;
}

export const remove = async (blogId, token) => {
    const result = request.remove(`${baseUrl}/${blogId}`, null, token);

    return result;
}