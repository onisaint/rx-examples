import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

// // Rx.Observable.interval(1000)
// //     .take(3)
// //     .map(a => a+a)
// //     .subscribe(createSubscriber("map"))

// function arrayMap(array, projection){
//     const retArray = [];
//     array.forEach(currentItem => {
//         retArray.push(projection(currentItem));    
//     });

//     return retArray;
// }

// // console.log(arrayMap([1,2,3], a=>a+a));

// function arrayMargeMap (array, projection ){
//     const returnArray = [];
//     for(let item of array){
//         const projectedArray = projection(item);
//         for(let projected of projectedArray){
//             returnArray.push(projected);
//         }
//     }

//     return returnArray;
// }

// const albumb = [
//     {title:"album 1", tracks:[{id: 1, title:"track 1"}]},
//     {title:"album 2", tracks:[{id: 2, title:"track 2"}]}
// ]

// const tracksWrong = arrayMap(albumb, albumb => albumb.tracks);
// const tracksRight = arrayMargeMap(albumb, albumb => albumb.tracks);

// console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight));

// Rx.Observable.range(1, 3)
//     .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `after ${i*2} seconds`))
//     .subscribe(createSubscriber("mergeMap"));

// function getTracks(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["track 1","track 2","track 3"]);
//         }, 1000)
//     });
// }

// Rx.Observable.fromPromise(getTracks())
//     .mergeMap(tracks => Rx.Observable.from(tracks))
//     .subscribe(createSubscriber("tracks"))

function query(value){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("this is a value")
        }, 1000);
    });
}

Rx.Observable.of("my quer")
    .do(() => console.log("quering"))
    .mergeMap(a => query(a))
    .do(() => console.log("after quering"))
    .subscribe(createSubscriber("query"))