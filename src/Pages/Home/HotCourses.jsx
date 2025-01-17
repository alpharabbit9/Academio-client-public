import React from 'react';
import useCourses from '../../Hooks/useCourses';
import CourseCard from './CourseCard';

const HotCourses = () => {

    const {courses} = useCourses();
    return (
        <div className='text-center'>
            <h2 className='text-4xl font-bold text-gray-700'>Top Picks by Our Learners</h2>
            <p className='text-gray-500'>Discover the courses that thousands of students trust to boost their skills and careers</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-6 gap-3'>
                {
                    courses.map((course,index) => <CourseCard course={course} key={course.index}></CourseCard>)
                }

            </div>
        </div>
    );
};

export default HotCourses;