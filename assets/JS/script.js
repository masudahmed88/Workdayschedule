//create our document ready function to make sure nothing runs before we load the page. 
$(document).ready(function () {
    console.log("linked")

    

    var time = moment().hours();
    var today = moment().format("dddd, MMMM Do YYYY");
    var timeBlocks = $('container').children('.time-block')
    var arr = [];

    // function to listen for click events on the page
    // grab the saved event options 
    // create vairables to save user input and time 
    $('.save-button').on('click', function () {
        console.log("clicked save button")
        // Saves the user-input
        var userInput = $(this).siblings(".user-input").val();
        console.log(userInput);
        // Saves the time block
        var timeBlock = $(this).parent().attr('id');
        console.log("TIME BLOCK", timeBlock)

        localStorage.setItem(timeBlock, userInput)

        $('.notify').addClass('show');

        setTimeout(function () {
            $('.notify').replace('show');
        }, 5000)
    })

    $('#currentTime').text(today);

    console.log("CURRENT TIME",time);
    function getCurrentTime(){

        $(".time-block").each(function(){
            var timeBlockValue = parseInt($(this).attr("id").split('-')[1]);
            console.log("TIME BLOCK VaLUE",timeBlockValue)

            if(timeBlockValue < time){
                $(this).addClass("past");
            } else if(timeBlockValue === time){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

$("#hour-9 .user-input").val(localStorage.getItem("hour-9"))
$("#hour-10 .user-input").val(localStorage.getItem("hour-10"))
$("#hour-11 .user-input").val(localStorage.getItem("hour-11"))
$("#hour-12 .user-input").val(localStorage.getItem("hour-12"))
$("#hour-13 .user-input").val(localStorage.getItem("hour-13"))
$("#hour-14 .user-input").val(localStorage.getItem("hour-14"))
$("#hour-15 .user-input").val(localStorage.getItem("hour-15"))
$("#hour-16 .user-input").val(localStorage.getItem("hour-16"))
$("#hour-17 .user-input").val(localStorage.getItem("hour-17"))
   
getCurrentTime();
})
   
    

