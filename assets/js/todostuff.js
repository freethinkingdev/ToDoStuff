/**
 * Created by marcin on 20/05/17.
 */

/* Done and dusted items class toggle on lis*/
$("#toDoUlList").on("click","li",function (e) {
    $(this).toggleClass("listDone");
    e.stopPropagation();
});

/*Creating functionality for the delete button to remove item from the list*/
$("#toDoUlList").on("click", "span", function (e) {
    e.stopPropagation();
    console.log($(this).text());
    $(this).parent().fadeOut(300, function () {
        $(this).remove();
    });
});

/*Adding new element to the list*/
$("#newToDoItem").on("keypress", function (e) {
    /*Making sure enter is pressed*/
    var enterKey = e.which;
    if (enterKey === 13){
        /*Getting typed text from the input*/
        var newItemToAddToTheList = $(this).val();
        /*If enter is pressed, get the value of the text input and append to the end of the todo list*/
        $("#toDoUlList").append("<li class='linkLookLikeHandle'><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+newItemToAddToTheList+"</li>");
        /*Clearing text value*/
        $(this).val("");
    }
});

$("#hideInputField").css("cursor","pointer");
$("#hideInputField").on("click",function () {
   $("#newToDoItem").slideToggle("fast");
});


