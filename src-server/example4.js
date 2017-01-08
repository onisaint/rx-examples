import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

const simple$ = new Rx.Subject();

// simple$.subscribe(createSubscriber("subject"));

// simple$.next("hello");
// simple$.next("world");
// simple$.complete();

// const interval$ = Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(createSubscriber("sub1"));
// intervalSubject$.subscribe(createSubscriber("sub2"));
// intervalSubject$.subscribe(createSubscriber("sub3"));

// setTimeout(() => {
//     intervalSubject$.subscribe(createSubscriber("look"))
// }, 2000);

// const currentUser$ = new Rx.BehaviorSubject({isLoggedIn:false});
// const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);

// currentUser$.next({ isLoggedIn: false});
// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));
// setTimeout(function() {
//     currentUser$.next({isLoggedIn:true, name:"nelson"})
// }, 3000);

// setTimeout(() => {
//     isLoggedIn$.subscribe(createSubscriber("delayed"));
// },1000)

// const replay$ = new Rx.ReplaySubject(3);
// replay$.next(1);
// replay$.next(2);

// replay$.subscribe(createSubscriber("one"));

// replay$.next(3);
// replay$.next(4);
// replay$.next(5);

// replay$.subscribe(createSubscriber("two"));

// replay$.next(6);

// const apiCalls$ = new Rx.AsyncSubject();
// apiCalls$.next(1);

// apiCalls$.subscribe(createSubscriber("apiCllas"))
// apiCalls$.next(2);
// apiCalls$.complete();

// setTimeout(function() {
//     apiCalls$.subscribe(createSubscriber("two"));
// }, 2000);