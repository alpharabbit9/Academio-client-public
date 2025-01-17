import React from 'react';

const CourseCard = ({course}) => {

    const {title,description,image,price,teacher} = course ;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success w-full mb-3">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;