//create our document ready function to make sure nothing runs before we load the page. 
$(document).ready(function () {
    console.log("linked")

    var time = parseInt(moment().format("h"));
    var today = moment().format("dddd, MMMM Do YYYY");
    var timeBlocks = $('container').children('.time-blocks')
    var arr = [];

    // function to listen for click events on the page
    // grab the saved event options 
    // create vairables to save user input and time 
    $('.save-button').on('click', function () {
        console.log("hey wer ecliked save button")
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
            var timeBlockValue = parseInt($(this).attr("value"));
            console.log(timeBlockValue)

            if(timeBlockValue < time){
                $(this).addClass("past");
            } else if(timeBlockValue == time){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

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
    // FROM HERE ON WILL BE A SEPERATE FUNCTION
    //function
    // go to moment.js docs to see how to get  current day and TIME
    // display current date and time in your header
    // THIS WILL BE YOUR CURRENT TIME VARIABLE
    //
    // go to W3 schools and check out the .each method
    // reference timeblocks
    // begin testing your current time against the time block to show your past, future, and present


    // create time updater function() 
    // get the current time 

    // create our loop to go over all the time blocks 


    // if else if statement to 
    // check to see if we have passed our time 
    // check out replaceWith and addClass 

    //check to see if current hour matches physical hour

    //check to see if the time is in the future 

    // DONEST NEED TO BE INSIDE FUNCTION
    // Retrieve LocalStorage and render items to the correct rows 
})
