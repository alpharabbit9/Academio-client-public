import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProivder';

const MyProfile = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-center items-center py-6'>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        className='h-72 w-full object-contain'
                           src={user?.photoURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name : {user?.displayName}</h2>
                    <p>Email : {user?.email}</p>
                    <p>Phone : 0178688560</p>
                    <p>Role : </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;