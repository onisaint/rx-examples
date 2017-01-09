import $ from 'jquery';
import Rx from 'rxjs/Rx';

const $drag = $("#drag");
const $document = $(document);
const $dropArea = $(".drop-area");

const beginDrage$ = Rx.Observable.fromEvent($drag, "mousedown");
const endDrag$ = Rx.Observable.fromEvent($document, "mouseup");
const mouseMove$ = Rx.Observable.fromEvent($document, "mousemove");

const currentOverArea$ = Rx.Observable.merge(
    Rx.Observable.fromEvent($dropArea, "mouseover").map(e => $(e.target)),
    Rx.Observable.fromEvent($dropArea, "mouseout").map(e => null),
);

const drop$ = beginDrage$
    .do(e => {
        e.preventDefault();
        $drag.addClass("dragging");
    })
    .mergeMap(startEvent => {
        return mouseMove$
            .takeUntil(endDrag$)
            .do(moveEvent => moveDrag(startEvent, moveEvent))
            .last()
            .withLatestFrom(currentOverArea$, (_, $area) => $area);
    })
    .do(() => {
        $drag.removeClass("dragging")
            .animate({top:0, left:0}, 250);
    });

drop$.subscribe($dropArea => {
    $dropArea.removeClass("dropped");
    $dropArea.addClass("dropped")
});

function moveDrag(startEvent, moveEvent){
    // console.log("moved")
    $drag.css({
        left:moveEvent.clientX - startEvent.offsetX,
        top:moveEvent.clientY - startEvent.offsetY
    })
}