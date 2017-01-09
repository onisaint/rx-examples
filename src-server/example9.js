import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

// function arrayReduce(array, accumulator, startValue)
// {        
//     let value = startValue;
//     for(let item of array){
//         value = accumulator(value, item);
//     }

//     return value;
// }

// const value = [342,432,23,1,5];

// console.log(arrayReduce(value, (acc, i) => acc + i, 0));

// // const max = arrayReduce(
// //     value,
// //     function (acc, value){
// //         if(value > acc) return value;

// //         return acc;
// //     },
// //     -1
// // );

// const max = arrayReduce(value, Math.max, -1)
// console.log(max);

// Rx.Observable.range(1,10)
//     .merge(Rx.Observable.never())
//     .scan((acc, value) => acc + value)
//     .subscribe(createSubscriber("reduce"))

Rx.Observable.range(1,10)
    .map(i => i*i)
    .scan(([last], current) => [current, last], [])
    .subscribe(createSubscriber("reduce"))