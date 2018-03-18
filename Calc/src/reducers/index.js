import {combineReducers} from 'redux';
import CalculatorReducer from './reducer-calculator';
import Calculate from './calculate';

const allReducers = combineReducers({
    //calculator represents reducer calculator is a piece of data
    calculator : CalculatorReducer,
    calculate : Calculate
});

export default allReducers;
