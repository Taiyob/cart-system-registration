import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = ({handleShowTitle}) => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(response=>response.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div className='w-2/3 grid grid-cols-3 gap-4 space-y-5'>
            {
                courses.map((course, idx)=><Course key={idx} course={course} handleShowTitle={handleShowTitle}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleShowTitle: PropTypes.func,
};

export default Courses;