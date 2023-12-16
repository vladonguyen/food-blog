import logoutHandler from '../context/authContext';




 const request = async (method, url, data, token) => {
    const buildOptions = (data) => {
        const options = {};
        
        if (data){
            options.body = JSON.stringify(data);
            options.headers = {
                'content-type': 'application/json'
            };
        
        }
        
        
        if(token){
            options.headers = {
             
                    ...options.headers,
                    'X-Authorization': token
                }
            }
            return options;
        };







    try {
        console.log(token)
        const response = await fetch(url, {
            ...buildOptions(data),
            'X-Authorization': token,
            method,
        });
        if(response.status === 204){
            return {};
        }
        
        if(response.status === 403){
            const errorMessage = await response.text();
            if(errorMessage.includes('User session does not exist')){
                return {};
            }else{
                throw new Error(errorMessage);
            }
            
        }
        
        const result = await response.json();
        
        if(!response.ok){
            throw result;
        }
        return result;

    } catch (error) {
        
        console.log(error.message);
        throw error; 
    }


}

export const get =  request.bind(null, 'GET');
export const post =  request.bind(null, 'POST');
export const put =  request.bind(null, 'PUT');
export const remove =  request.bind(null, 'DELETE');
export const patch =  request.bind(null, 'PATCH');