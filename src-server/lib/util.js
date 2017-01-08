export function createSubscriber(tag){
    return {
        next(itme) {console.log(`${tag}.next ${itme}`)},
        error(error) {console.log(`${tag}.err ${error.stack || error}`)},
        complete() {console.log(`${tag}.complete`)}
    };
}