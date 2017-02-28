import Rx from 'rxjs/Rx';

// // const promise = new Promise((resolve, reject) => {
// //     console.log("in promise");
// //     resolve("hey");
// // });

// // promise.then(item => console.log(item));


// const simple$ = new Rx.Observable(observer => {
//     console.log("generatig observable");
//     setTimeout(() => {
//         observer.next("an interval");
//         setTimeout(() => {
//             observer.next("second intervl");
//             observer.complete();
//         }, 1000)
//     }, 1000);
// });

// const error$ = new Rx.Observable(observer => {
//     observer.error(new Error("WOAH!"));
// })

// error$.subscribe(
//     item => console.log(`itme : ${item}`),
//     err => console.log(`err : ${err.stack}`),
//     () => console.log("complete")
// );


// setTimeout(() => {
//     simple$.subscribe({
//         next:item => console.log(`itme 2: ${item}`),
//         error(err){
//             console.log(`err 2: ${err}`)
//         },
//         complete:function(){
//             console.log(`itme 2 comlete`)
//         }
//     })
// },3000);

//part ii

function createIntrval(time){
    return new Rx.Observable(observer => {
        let index = 0;
        let interval = setInterval(() => {
            observer.next(index++);
        }, time);

        return () => {
            clearInterval(interval);
        }
    });
}

function createSubscriber(tag){
    return {
        next(itme) {console.log(`${tag}.next ${itme}`)},
        error(error) {console.log(`${tag}.err ${error.stack || error}`)},
        complete() {console.log(`${tag}.complete`)}
    };
}

function take$(sourceObservable$, amount){
    return new Rx.Observable(observer => {
        let cnt = 0;
        const subscription = sourceObservable$.subscribe({
            next(item) {
                observer.next(item);
                if(++cnt >= amount)
                    observer.complete();
            },
            error(error) { observer.error(error)},
            complete() { observer.complete() }
        });

        return () => subscription.unsubscribe();
    })
}

const everySecond$ = createIntrval(500);
const firstFiveSex$ = take$(everySecond$, 3);
const subscription =  firstFiveSex$.subscribe(createSubscriber("one"));

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3500);