import {useState} from 'react';
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevState => ++prevState);
    };

    return (
        <div className="wrapper">
            <div>{count}</div>
            <button onClick={increment}>inc</button>
        </div>
    );
};

export default Counter;