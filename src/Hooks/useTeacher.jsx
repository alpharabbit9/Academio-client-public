import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProivder';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './UseAxiosSecure';


const useTeacher = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isTeacher = false, isLoading, isError } = useQuery({
    queryKey: ['isTeacher', user?.email],
    queryFn: async () => {
      if (!user?.email) return false;
      const res = await axiosSecure.get(`/users/teacher/${user.email}`);
      console.log(res.data);
      return res.data?.teacher;
    },
    enabled: !!user?.email,  // Prevents unnecessary queries
  });

  return [isTeacher, isLoading, isError];
};

export default useTeacher;
