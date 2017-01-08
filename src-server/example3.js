import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';
import fs from 'fs';

// fs.readdir("./src-server", (err, items) => {
//     if(err) console.error(err);
//     else{
//         console.log(items);
//     }
// })


// const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

// readdir$("./src-server")
//     .mergeMap(files => Rx.Observable.from(files))
//     .map(file => `Manip : ${file}`)
//     .subscribe(createSubscriber("readDir"));

function getItem(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 1000)
    });
}

Rx.Observable.fromPromise(getItem())
    .subscribe(createSubscriber("promise"));