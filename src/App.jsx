import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);
  const [creditHourRemaining, setCreditHourRemaining] = useState(0);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = course =>{
    const isExist = cart.find((item) => item.course_name == course.course_name);

    let creditCount = course.credit;
    let priceCount = course.price;

    if(isExist){
     return toast("Already selected this course.");
    }

    else{

      cart.forEach((item) => {
        creditCount = creditCount + item.credit;
      });

      const totalCreditHourRemaining = 20 - creditCount;

      if(creditCount > 20){
        toast("Total credit reaches it's limit.")
      }

      else{
        setCreditHourRemaining(totalCreditHourRemaining);

        setTotalCreditHour(creditCount);
  
        cart.forEach((item) => {
          priceCount = priceCount + item.price;
        })
  
        setTotalPrice(priceCount);
  
        const newCart = [...cart, course];
        setCart(newCart);
      }

     
    }
  }
  return (
    <>
      
      <Header></Header>
      <div className='grid grid-cols-1 lg:flex mx-16 mb-20'>
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart cart={cart} creditHourRemaining={creditHourRemaining} totalPrice={totalPrice} totalCreditHour={totalCreditHour}></Cart>
      </div>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
