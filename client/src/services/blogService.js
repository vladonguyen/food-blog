import * as request  from "../lib/request";

const baseUrl = 'http://localhost:3030/data/blog'

export const getAll = async () => {
const result = await request.get(baseUrl);
console.log(result)
return result
};



export const getOne = async (blogId) => {
    const result = await request.get(`${baseUrl}/${blogId}`);
    return result
}

export const getLastTwo = async () => {
    const result = await request.get(`${baseUrl}?sortBy=date&pageSize=2`);
    console.log(result)
    return result;
    };



export const create = async (blogData) => {
    const result = await request.post(baseUrl, blogData);

    return result
}

