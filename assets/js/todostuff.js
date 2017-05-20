/**
 * Created by marcin on 20/05/17.
 */

/*Class toggle on lis*/
$("#toDoUlList li").click(function (e) {
    $(this).toggleClass("listDone");
    e.stopPropagation();
});

/*Creating functionality for the delete button to remove item from the list*/
$("#toDoUlList span").on("click", function (e) {
    e.stopPropagation();
    console.log($(this).text());
    $(this).parent().fadeOut(200, function () {
        $(this).remove();
    });
});


