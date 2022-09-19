import {useState} from 'react';
import s from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(prevState => ++prevState);
    };

    return (
        <div className={s.wrapper}>
            <div>{count}</div>
            <button className={s.button} onClick={increment}>inc</button>
        </div>
    );
};

export default Counter;