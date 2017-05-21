/**
 * Created by marcin on 20/05/17.
 */

/*Class toggle on lis*/
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

$("#newToDoItem").on("keypress", function (e) {
    var enterKey = e.which;
    if (enterKey === 13){
        var newItemToAddToTheList = $(this).val();
        $("#toDoUlList").append("<li class='linkLookLikeHandle'><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+newItemToAddToTheList+"</li>");
        $(this).val("");
    }
});


