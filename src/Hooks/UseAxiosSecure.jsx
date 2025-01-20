import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProivder";

export const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {

    const navigate = useNavigate();
    const {userLogOut} = useContext(AuthContext);

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
    }),async (error) => {

        const status = error.response.status;
        if(status === 401 || status === 403)
            {

                await userLogOut();

                navigate('/login');

            }

        return Promise.reject(error);

    }
    

    return axiosSecure;
    
};

export default useAxiosSecure;