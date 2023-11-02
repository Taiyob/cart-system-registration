import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/bs';
import { FiDollarSign } from 'react-icons/fi';

const Course = ({course, handleShowTitle}) => {
    const {cover,title,description,price,credit} = course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cover} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>
                    {description}
                </p>
                <div >
                    <div className='w-full'><FiDollarSign></FiDollarSign> Price: {price}</div>
                    <div className='w-full'><BsBook></BsBook> Credit: {credit}hr</div>
                </div>
                <div className="card-actions w-full">
                    <button onClick={()=>handleShowTitle(course)} className="btn btn-primary w-full text-white font-bold">Select</button>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleShowTitle: PropTypes.func,
};

export default Course;