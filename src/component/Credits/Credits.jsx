import PropTypes from 'prop-types';

const Credits = ({titles, credits, remainingCredit, totalPrice}) => {
    // const {title} = titles;
    return (
        <div className='w-1/3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-blue-600 font-semibold">Credit Hour Remaining {remainingCredit} Hour</h2>
                    <span className='border-b-2 border-gray-800'></span>
                    <h1 className='text-black font-w-800 text-3xl'>Course Name</h1>
                    {
                       titles.map((title,idx)=><ol key={idx}><li>{title.title}</li></ol>) 
                    }
                    <span className='border-b-2 border-gray-800'></span>
                    <h2 className='text-black font-w-600 text-2xl'>Total Credit Hour: {credits}</h2>
                    <span className='border-b-2 border-gray-800'></span>
                    <h2 className='text-3xl font-w-700 text-black'>Total Price: {totalPrice} USD</h2>
                </div>
            </div>
        </div>
    );
};

Credits.propTypes = {
    titles: PropTypes.array,
    credits: PropTypes.number,
    remainingCredit: PropTypes.number,
    totalPrice: PropTypes.number,
};

export default Credits;