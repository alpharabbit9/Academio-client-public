import React, { useContext, useState } from 'react';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../Provider/AuthProivder';

const TeacherForm = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    experience: 'beginner', // Default
    title: '',
    category: 'web development',
  });

  const categories = ['Web Development', 'Digital Marketing', 'Design', 'Data Science', 'AI & ML'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      name: user.displayName,
      email: user.email,
      experience: formData.experience,
      title: formData.title,
      category: formData.category,
      image: user.photoURL,
    };
    try {
      const response = await axiosSecure.post('/teacher-requests', requestData);
      alert(response.data.message);
      
    } catch (error) {
      alert('Failed to submit request.');
      console.error('Submission error:', error.response?.data);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-12 bg-green-200">
      <h2 className="text-xl font-bold">Apply to Become a Teacher</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Name</label>
          <input type="text" value={user?.displayName} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
        </div>
        <div>
          <label>Experience</label>
          <select name="experience" value={formData.experience} onChange={handleChange} className="select select-bordered w-full">
            <option value="beginner">Beginner</option>
            <option value="mid-level">Mid-level</option>
            <option value="experienced">Experienced</option>
          </select>
        </div>
        <div>
          <label>Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input input-bordered w-full" />
        </div>
        <div>
          <label>Category</label>
          <select name="category" value={formData.category} onChange={handleChange} className="select select-bordered w-full">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit for Review</button>
      </form>
    </div>
  );
};

export default TeacherForm;
