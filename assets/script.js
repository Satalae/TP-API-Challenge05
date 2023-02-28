// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  //global variables
  var currentTime = dayjs().format('HH');
  var currentDate = dayjs().format('dddd, MMMM DD');

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Listener for button presses
  $('.saveBtn').click(function() {
    console.log(this.parentElement.siblings);
  });

  //for loop to apply classes
  for(var i = 0; i < 24; i++){
    var forTime = '#hour-' + i;

    if(i < currentTime){
      //toggle #hour-i class to past
      $(forTime).attr('class', 'row time-block past')
    }
    else if(i == currentTime){
      //change #hour-i class to present
      $(forTime).attr('class', 'row time-block present')
    }
    else if(i > currentTime){
      //change #hour-i class to future
      $(forTime).attr('class', 'row time-block future')
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  //adds user input to local storage

  
  //Uses dayjs() to display current date in header
  var currentDate = dayjs().format('dddd, MMMM DD');
  var currentTime = dayjs().format('hh:mm:ss a');

  function displayTime(){
    $('#currentDay').text(currentDate + '\n' + currentTime);
  }

  displayTime();
  setInterval(displayTime, 1000);
});
