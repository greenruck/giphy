const $gifArea = $("#gif-area");
const $searchInput = $("#search");

function addGif(res) {
    let numResults = res.data.length;
    if(numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "new-gif"});
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "giffy"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}
$("form").on("submit", async function(e){
    e.preventDefault();

    let serachTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: serachTerm,
            api_key: "WiDnDnNqto6O99ksAseOK7iieNNvpqEQ"
        }
    });
    addGif(response.data);
});

$("#remove").on("click", function(){
    $gifArea.empty();
});