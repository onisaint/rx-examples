import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// const interval$ = Rx.Observable.interval(1000)
//     .take(10)
//     .publish();

// setTimeout(function() {
//     interval$.connect();
// }, 5000);

// setTimeout(() => {
//     interval$.subscribe(createSubscriber("one"))
// },1200)


// setTimeout(() => {
//     interval$.subscribe(createSubscriber("two"))
// },3200)

// const socket = {on : () => {}};
// const chatMessage$ = new Rx.Observable(observer => {
//      console.log("subscribed");
//      socket.on("char:msg", msg => observer.next(msg));
// }).publish();   

// chatMessage$.connect();

// chatMessage$.subscribe(createSubscriber("one"));
// chatMessage$.subscribe(createSubscriber("two"));

// const simple$ = new Rx.Observable(observer => {
//     observer.next("one");
//     observer.next("two");
//     observer.next("three");

//     return () => console.log("disposed");
// });

// const published$ = simple$.publishReplay(2);

// var s1 = published$.subscribe(createSubscriber("one"));
// var connection = published$.connect();
// var s2 = published$.subscribe(createSubscriber("two"));

// s1.unsubscribe();
// s2.unsubscribe();
// connection.unsubscribe();

const simple$ = new Rx.Observable(observer => {
    observer.next("one");
    observer.next("two");
    observer.next("three");

    return () => console.log("disposed");
});

// const published$ = simple$.publishReplay(2).refCount();

const published$ = simple$.share();
var s1 = published$.subscribe(createSubscriber("one"));
var s2 = published$.subscribe(createSubscriber("two"));

s1.unsubscribe();
s2.unsubscribe();