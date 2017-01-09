import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

// function arrayZip(arr1, arr2, selector){
//     const count = Math.min(arr1.length, arr2.length);
//     const results = [];

//     for(let i = 0; i < count; i++){
//         const combined = selector(arr1[i], arr2[i]);
//         results.push(combined)
//     }

//     return results;
// }

// const a1 = [32, 2, 52, 43, 54];
// const a2 = [1, 0, 10, 4, 1, 4, 1, 6, 2, 4];
// const results = arrayZip(a1, a2, (left, right) => left * right);

// console.log(results);

// Rx.Observable.range(1, 10)
//     .zip(Rx.Observable.interval(500), (left, right) => `item: ${left}, timr:${right * 500}`)
//     .subscribe(createSubscriber("zip"))

// Rx.Observable.interval(1000)
//     .withLatestFrom(Rx.Observable.interval(500))
//     .subscribe(createSubscriber("with latest"))

// Rx.Observable.interval(1000)
//     .combineLatest(Rx.Observable.interval(500), (left, right) => left * right)
//     .take(5)
//     .subscribe(createSubscriber("with latest"))

const currentUser$ = new Rx.BehaviorSubject({isLoggedIn : false});

Rx.Observable.interval(1000)
    .combineLatest(currentUser$)
    .filter(([i, User]) => User.isLoggedIn)
    .subscribe(createSubscriber("withLatestFrom"));
    
setTimeout(function() {
    currentUser$.next({isLoggedIn: true})
}, 3000);