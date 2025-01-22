import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProivder';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { useNavigate } from 'react-router-dom';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCourse = {
            ...formData,
            name: user.displayName,
            email: user.email,
            status: 'pending', 
            totalEnrolment: 0, 
        };
        try {
            const response = await axiosSecure.post('/courses', newCourse); 
            alert(response.data.message || 'Course added successfully!');
            navigate('/dashboard/myClass'); // 
        } catch (error) {
            alert('Failed to add course.');
            console.error('Error:', error.response?.data);
        }
    };


    return (
        <div className="p-12 bg-base-200">
            <h2 className="text-2xl font-bold mb-6">Add New Class</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input input-bordered w-full" />
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} required className="input input-bordered w-full" />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required className="textarea textarea-bordered w-full" />
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="url" name="image" value={formData.image} onChange={handleChange} required className="input input-bordered w-full" />
                </div>
                <button type="submit" className="btn btn-primary">Add Class</button>
            </form>
        </div>
    );
};

export default AddClass;
