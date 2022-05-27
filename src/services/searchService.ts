import * as request from '../utils/request';

export const search = async (q : string,type = 'less') => {
    try {
        const res = await request.get('users/search',{
            params: {
                q,
                type,
            },
        });
        return res.data;
        
    } catch (err) {
        
        throw new Error("Failed fetchApi Search !")
    }

};
