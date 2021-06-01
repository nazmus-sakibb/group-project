import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import allcourses from '../fakeData/course.json'
import CourseSidebar from "../CourseSidebar/CourseSidebar";

const UserDashboard = () => {
    const { id } = useParams();

    const [courses, setCourses] = useState({});


    useEffect(() => {
        const singleCourse = allcourses.find(pd => pd.id == id);
        setCourses(singleCourse);

    }, [id]);

    const { modules } = courses;
    
    return (
        <div className="">
            <div className="row">
                <div className="col-md-3 learn-page-container">
                    <CourseSidebar/>
                </div>
                <div className=" col-md-9 px-3">
                    <div className="row">

                    </div>
                    <div className="row learn-page-container">
                    {
                        modules?.map(module => <div className="week-card w-75 mb-3 mx-auto">
                            <Link to={"/courseItem/"+module._id}>
                            <div className="card-details p-4 mb-3 text-white text-center">
                                <h3>{module.weekTitle}</h3>
                                <div className="progress week-progress mb-2 w-75 mx-auto mt-3">
                                    <div className="progress-bar" role="progressbar" style={{ width: "83%" }} aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"> </div>   
                                </div>
                                <p>{module.mCompletionRate}% completed</p>
                            </div>
                            </Link>
                        </div>)
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
