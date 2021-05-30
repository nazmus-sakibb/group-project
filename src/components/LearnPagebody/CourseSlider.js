
import React, { useState, useEffect } from 'react';
import allcourses from '../fakeData/course.json'
import CourseCard from './CourseCard';

const CourseSlider = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(allcourses);
    }, []);
    console.log(courses);
    return (
        <div>
            {
                courses.map((course) => <CourseCard course={course} key={course.id}></CourseCard>)
            }
        </div>
    );
};

export default CourseSlider;