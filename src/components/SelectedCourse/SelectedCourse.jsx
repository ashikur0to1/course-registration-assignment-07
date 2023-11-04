import PropTypes from 'prop-types';

const SelectedCourse = ({course, idx}) => {
    const {course_name} = course;
    return (
        <div>
            <ol>
                <li className='text-base font-normal text-[#1c1b1b99]'>{idx+1} {course_name}</li>
            </ol>
        </div>
    );
};

SelectedCourse.propTypes = {
    course: PropTypes.object,
    idx: PropTypes.any
}

export default SelectedCourse;