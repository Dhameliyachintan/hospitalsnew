import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../Redux/Action/Counter.action';

function Counter(props) {
    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()

    const handleincrement = () => {
        dispatch(increment())
    }

    const handledecrement = () => {
         dispatch(decrement())
    }
    return (
        <div className='text-center'>
            <button className='border-1' onClick={() => handleincrement()}>+</button>
            <p>{count.counter}</p>
            <button className='border-1' onClick={() => handledecrement()}>-</button>
        </div>
    );
}

export default Counter;

