//create our document ready function to make sure nothing runs before we load the page. 
$(document).ready(function () {
    console.log("hey were linked")

    var time = moment().format("H");
    var today = moment().format("dddd, MMMM Do YYYY");




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
            $('.notify').removeClass('show');
        }, 5000)
    })


    $('#currentTime').text(today);


    $('.hour').each(function () {
        for (var i = 0, arr.length, i++) {
            if (  == time) {
                document.querySelector('.time-block');
                element.classList.add("block-red");
            } else if (timeBlock > time) {
                document.querySelector('.time-block');
                element.classList.add("block-green");
            } if ($(.hour).innerHTML < time) {
                document.querySelector('.time-block');
                element.classList.add("block-gray");

            }
        }
    }
    )

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
    // check out removeClass and addClass 

    //check to see if current hour matches physical hour

    //check to see if the time is in the future 

    // DONEST NEED TO BE INSIDE FUNCTION
    // Retrieve LocalStorage and render items to the correct rows 







})