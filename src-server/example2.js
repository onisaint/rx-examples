import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

// Rx.Observable.interval(500)
//     .take(5)
//     .subscribe(createSubscriber("interval"));

// Rx.Observable.timer(5000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"));

Rx.Observable.of(["hello world",42,"walla"])
    .subscribe(createSubscriber("of"));

var arr = [1,2,3,4,5,6,7,9]; 
Rx.Observable.from(arr)
    .map(i => i*5)
    .subscribe(createSubscriber("from"))

// function* generate(){
//     yield 1;
//     yield 2;
//     yield 5;
//     yield "Hey";
// }

// Rx.Observable.from(generate())
//     .subscribe(createSubscriber("generate"));

Rx.Observable.throw(new Error("hey"))
    .subscribe(createSubscriber("error"));


Rx.Observable.empty()
    .subscribe(createSubscriber("empty"));

let sideEffect = 0;
const defr$ = Rx.Observable.defer(() => {
    sideEffect++;
    return Rx.Observable.of(sideEffect);
});

defr$.subscribe(createSubscriber("defr.1"));
defr$.subscribe(createSubscriber("defr.2"));
defr$.subscribe(createSubscriber("defr.3"));

Rx.Observable.never()
    .subscribe(createSubscriber("never"));

Rx.Observable.range(10, 30)
    .subscribe(createSubscriber("range"));