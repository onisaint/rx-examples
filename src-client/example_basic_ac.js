import $ from "jQuery";

const $title = $("#title");
const $results = $("#results");

var lastQuery = null,
    lastTimeOut = null,
    nextQueryId = 0;

$title.on("keyup", e => {
    const title = e.target.value;

    if (title == lastQuery) return;
    else lastQuery = title;

    lastTimeOut ? window.clearTimeout(lastTimeOut) : null;


    let ourQueryId = ++nextQueryId;
    lastTimeOut = window.setTimeout(() => {
        getItems(title)
            .then(items => {
                if(ourQueryId != nextQueryId) return;
                
                $results.empty();

                const $items = items.map(item => $('<li />').text(item));
                $results.append($items);

            })
    }, 500)

    console.log("wow")
})


// ---------------------------------------------\\

function getItems(title) {
    console.log(`quering ${title}`);
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve([title, "item 2", `another ${Math.random()}`]);
        }, 500 + Math.random() * 1000);
    })
}

console.log("config")