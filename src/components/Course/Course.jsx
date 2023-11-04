import PropTypes from 'prop-types';
import dollar from "../../assets/dollar-sign.svg"
import book from "../../assets/book.svg"

const Course = ({course, handleAddToCart}) => {
    const {course_img, course_name, course_details, price, credit} = course;
    return (
        <div className='w-[312px] h-[402px] bg-[#FFF] rounded-xl p-4'>
            <img className='w-full' src={course_img} alt={`course image of the ${course_name}`} />
            <h1 className='text-lg font-semibold text-[#1C1B1B] my-4'>{course_name}</h1>
            <p className='text-sm font-normal text-[#1c1b1b99] mb-5'>{course_details}</p>
            <div className='flex justify-between mb-[26px]'>
                <div className='flex gap-3'>
                    <img src={dollar} alt="" />
                    <h3>Price: {price}</h3>
                </div>
                <div className='flex gap-3'>
                    <img src={book} alt="" />
                    <h3>Credit : {credit}hr</h3>
                </div>
            </div>
            <button onClick={() => handleAddToCart(course)} className='w-[280px] h-10 bg-[#2F80ED] text-lg font-semibold text-[#FFF] rounded-lg border-solid border-1 border-[#2F80ED]'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Course;