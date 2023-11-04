import PropTypes from 'prop-types';
import SelectedCourse from '../SelectedCourse/SelectedCourse';

const Cart = ({cart, creditHourRemaining, totalCreditHour, totalPrice}) => {
    return (
        <div className="w-1/4 h-[550px] bg-[#FFF] rounded-xl p-6">
            <h3 className='text-lg font-bold text-[#2F80ED] border-b-2 mb-4 pb-4'>Credit Hour Remaining {creditHourRemaining} hr</h3>
            <h2 className="text-xl font-bold text-[#1C1B1B] mb-5">Course Name</h2>
            {
                cart.map((selectedCourse,idx) => <SelectedCourse key={idx} idx={idx} course={selectedCourse}></SelectedCourse>)
                
            }
            <h4 className='text-base font-medium text-[#1c1b1bcc] border-y-2 py-4 mt-4'>Total Credit Hour : {totalCreditHour}</h4>
            <h4 className='text-base font-semibold text-[#1c1b1bcc] py-4 mt-4'>Total Price : {totalPrice} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
}

export default Cart;