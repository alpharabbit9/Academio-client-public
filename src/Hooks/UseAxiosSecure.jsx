import axios from "axios";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('Request stopped ny config')
        config.headers.authorization = ` Bearer ${token}`
        return config ;
    } ,function(error){
        return Promise.reject(error);
    })

    // 401 and 403

    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }),(error) => {

        const status = error.response.status;

        return Promise.reject(error);

    }
    

    return axiosSecure;
    
};

export default useAxiosSecure;