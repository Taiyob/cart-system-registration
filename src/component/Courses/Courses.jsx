import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Courses = props => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(response=>response.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div className='w-2/3 grid grid-cols-3 gap-4 space-y-5'>
            {
                courses.map((course, idx)=><Course key={idx} course={course}></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    
};

export default Courses;