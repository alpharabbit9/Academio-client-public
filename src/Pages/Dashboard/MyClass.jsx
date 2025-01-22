import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';

import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProivder';

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const { data: classes = [], refetch } = useQuery({
    queryKey: ['myClasses', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/courses?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        await axiosSecure.delete(`/courses/${id}`);
        toast.success('Class deleted successfully.');
        refetch();
      } catch (error) {
        console.error('Delete failed:', error);
        toast.error('Failed to delete the class.');
      }
    }
  };

  const openUpdateModal = (course) => {
    setSelectedClass(course);
    setIsModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axiosSecure.put(`/courses/${selectedClass._id}`, selectedClass);
      toast.success('Class updated successfully.');
      setIsModalOpen(false);
      refetch();
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Failed to update the class.');
    }
  };

  const handleChange = (e) => {
    setSelectedClass({ ...selectedClass, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">My Classes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((course) => (
          <div key={course._id} className="card shadow-md p-4 bg-base-100">
            <img src={course.image} alt={course.title} className="rounded-md" />
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p>Name: {course.name}</p>
            <p>Email: {course.email}</p>
            <p>Price: ${course.price}</p>
            <p>Description: {course.description}</p>
            <p>Status: <span className={`badge ${course.status === 'approved' ? 'badge-success' : 'badge-warning'}`}>{course.status}</span></p>
            <button className="btn btn-primary mt-2" onClick={() => openUpdateModal(course)}>Update</button>
            <button className="btn btn-error mt-2" onClick={() => handleDelete(course._id)}>Delete</button>
            <Link to={`/dashboard/my-class/${course._id}`} className={`btn btn-info mt-2 ${course.status !== 'approved' && 'btn-disabled'}`}>See Details</Link>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Update Class</h3>
            <form onSubmit={handleUpdate}>
              <div>
                <label>Title</label>
                <input type="text" name="title" value={selectedClass.title} onChange={handleChange} className="input input-bordered w-full" />
              </div>
              <div>
                <label>Price</label>
                <input type="number" name="price" value={selectedClass.price} onChange={handleChange} className="input input-bordered w-full" />
              </div>
              <div>
                <label>Description</label>
                <textarea name="description" value={selectedClass.description} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
              </div>
              <button type="submit" className="btn btn-success mt-2">Save</button>
              <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary mt-2">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClass;
