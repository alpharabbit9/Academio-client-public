import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProivder';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin = false, isLoading, isError } = useQuery({
      queryKey: ['isAdmin', user?.email],
      queryFn: async () => {
        if (!user?.email) return false;
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        console.log(res.data);
        return res.data?.admin;
      },
      enabled: !!user?.email,  // Prevents unnecessary queries
    });
  
    return [isAdmin, isLoading, isError];
  };
  

export default useAdmin;