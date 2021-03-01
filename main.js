// constants -------------------------



// cache/storage ---------------------
let addButton = $("#addinsert")



// event listeners -------------------
$("#addinsert").click(function() {
    $("ul").append("<li>" + $('#inserttext').val() + "</li>")
})

// functions -------------------------


