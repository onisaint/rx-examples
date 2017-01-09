import Rx from 'rxjs/Rx';
import {
    createSubscriber
} from './lib/util';

// Rx.Observable.concat(
//     Rx.Observable.of(42),
//     Rx.Observable.throw(new Error("blah")),
//     Rx.Observable.of(10)
// ).subscribe(createSubscriber("concat"));


function getApi(){
    return new Rx.Observable(observer => {
        console.log("get Api");
        setTimeout(function() {
            observer.error(new Error());
        }, 1000);
    })
}

getApi()
    .retry(3)
    .catch(error => Rx.Observable.of(error))
    .do(() => console.log("thing"))
    .subscribe(createSubscriber("api"))