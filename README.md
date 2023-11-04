# Project Features

1. **Course Selection:**
   - Users can browse and select individual courses from a list of available courses.
   - When a course is selected, its title is added to the cart section.

2. **Credit Limit Check:**
   - The system keeps track of the total credits of the courses selected in the cart section.
   - If the total credits exceed 20, users are prevented from adding more courses.
   - A React toast message is displayed if the credit limit is exceeded.

3. **Duplicate Course Prevention:**
   - The system prevents users from adding the same course to the cart section more than once.
   - If a user attempts to add a duplicate course, a React toast message is displayed.

4. **Credit Calculation:**
   - The cart section displays the remaining credit available for the user.
   - This credit is calculated by subtracting the total credits of the courses in the cart from the maximum limit of 20.

5. **Total Price Calculation:**
   - The cart section displays the total price of all the courses added.
   - Each course has a price, and when courses are added, the total price is updated accordingly.

These features ensure a smooth course registration experience, preventing credit limit violations, duplicate course additions, and providing users with real-time feedback through toast messages.

# Discussion about how I can manage the state in this project

We know, In React, the useState hook is a built-in function that allows functional components to manage and update their local state.

To use the useState hook, firstly I need to import it from the React library at the beginning of my JavaScript file. I need to use useState hook a several times in my project. So, firstly I import the useState hook from the React library at the beginning of my JavaScript file.

Then comes the initializing state. I use the useState function within a functional component to initialize a state variable and its initial value. It returns an array with two elements.

- The first element is the current state value.
- The second element is a function to update the state.

    ```javascript
    const [state, setState] = useState(initialValue);
    ```

I access the current state value using the cart variable, and I update the state using the corresponding setter function setCart.

When I want to update the state, i call the setter function with the new value I want to assign to the state variable. React will then re-render the component with the updated state.

I use multiple useState calls within a single component to manage multiple state variables independently.

The useState hook simplifies state management in functional components, making them more powerful and allowing them to have stateful behavior similar to class components. It's a fundamental part of React's functional component API.

