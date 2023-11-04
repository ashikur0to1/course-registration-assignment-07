import { useEffect, useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                courses.map((course,idx) => <Course key={idx} course={course} handleAddToCart={handleAddToCart}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddToCart: PropTypes.func
}

export default Courses;