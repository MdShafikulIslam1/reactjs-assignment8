import React from 'react';

const Question = () => {
    return (
        <div className="text-xl font-medium w-3/4 mx-auto true my-4">
            <p>Q-1. How does react Work?</p>
            <p>Ans-1.React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <p>Q-2. What is the difference between props and useState?</p>
            <p>Ans-2:The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component</p>
            <p>Q-3:what do we do by useEffect in react?</p>
            <p>Ans-3:The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional
            useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.This is not what we want. There are several ways to control when side effects run.We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            </p>
        </div>
    );
};

export default Question;