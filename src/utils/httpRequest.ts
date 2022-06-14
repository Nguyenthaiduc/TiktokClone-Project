import axios from 'axios';


const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
});
//Thông thường dùng axios res.data.data => custom res.data
export const get  = async (path: string, option = {}) => {
    try {
        const response = await httpRequest.get(path,option);
        return response.data;

    }catch (err) {
        throw new Error("Failed get data request")
    }
}

export default httpRequest;

// Local / development
// Test / Staging
// UAT
// Production