import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import allcourses from '../fakeData/course.json'

const CourseItems = () => {
    const {_id} =useParams();
    console.log(_id)
    const [courseItems, setCourseItems] = useState({});


    useEffect(() => {
        const singleCourse = allcourses.find(pd => pd._id == _id);
        setCourseItems(singleCourse);

    }, [_id]);

    console.log(courseItems);
    return (
        <div>
            
        </div>
    );
};

export default CourseItems;