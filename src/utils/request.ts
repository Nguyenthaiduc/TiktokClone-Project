import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
//Thông thường dùng axios res.data.data => custom res.data
export const get  = async (path: string, option = {}) => {
    try {
        const response = await request.get(path,option);
        return response.data;

    }catch (err) {
        throw new Error("Failed get data request")
    }
}

export default request;