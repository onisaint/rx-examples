import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

// Rx.Observable.range(1,110)
//     .bufferCount(10)
//     .subscribe(createSubscriber("items"))

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .subscribe(createSubscriber("bufferTime"))

// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//     .buffer(stopSubject$)
//     .subscribe(createSubscriber("buffer"));

// setTimeout(() => {
//     stopSubject$.next();
// }, 3000)

Rx.Observable.range(1, 10)
//    .merge(Rx.Observable.never())
    .toArray()
    .subscribe(createSubscriber("range"))