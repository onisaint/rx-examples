import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

Rx.Observable.range(1, 10)
    .do(a => console.log(`from do ${a}`))
    .map(a => a * a)
    .subscribe(createSubscriber("sqr"));

Rx.Observable.range(1, 10)
    .finally(() => console.log(`from finally`))
    .map(a => a * 2)
    .subscribe(createSubscriber("f sqr"));

Rx.Observable.range(1,10)
    .filter(a => a < 2 || a > 4)
    .subscribe(createSubscriber("filter"));

Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber("intervl"));