// check off specific todos by clicking
$("ul").on("click","li", (function(){
    $(this).toggleClass("completed");
}));

//click on X to delete Todo
$("ul").on("click","span",(function(event){
    //select the x, and the parent li, make it fade out, and then remove it
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    //prevent event from bubbling - otherwise it will toggle since the span is in an li
    event.stopPropagation()
}));

//add new todo on keypress (enter)
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //extract value of input for new todo
        var todoText = $(this).val();
        //clear input
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-times'></i></span>" + todoText + "</li>");
    }
});

//toggle the input field from appearing or not by clicking on the edit icon
$("#toggleTextInput").click(function(){
    $("input[type='text']").fadeToggle();
});

// https://github.com/mrivasperez/