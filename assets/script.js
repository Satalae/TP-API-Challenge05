// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  //global variables
  var currentTime = dayjs().format('HH');
  var currentDate = dayjs().format('dddd, MMMM DD');

  //Listener for save button presses
  $('.saveBtn').click(function() {
    //first var grabs the parent div of the row
    var parentPointer = this.parentElement;
    console.log(parentPointer);
    //second is split to ensure theres no dom traversal tomfoolery
    var txtCont = $(parentPointer).children('textarea').val();

    //Takes the ID number of the selected box
    pointerID = $(parentPointer).attr("id");
    numberID = pointerID.slice(5);
    
    //Stores input into local storage
    localStorage.setItem("savedText" + numberID, txtCont);
  });

  //for loop to apply classes
  for(var i = 0; i < 24; i++){
    //constructs the proper pointer for that hour
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
  function displayStorage(){
    for(var i = 0; i < 23; i++){
      //DOM Traversal to textarea, iterating through each time block
      var boxSelect = $("hour-" + i).children('textarea');
      console.log(boxSelect);
      //Obtains the locally stored text for that given hour
      var storedText = localStorage.getItem("savedText" + i);
      console.log("The savedText is: " + storedText);
      
      //Sets inside box with locally stored text.
      $(boxSelect).val(storedText);
      console.log($(boxSelect).val());
    }
  }
  
  //Uses dayjs() to display current date in header
  function displayTime(){
    var dayNow = dayjs().format('dddd, MMMM DD');
    var timeNow = dayjs().format('hh:mm:ss a');
    $('#currentDay').text(dayNow + '\n' + timeNow);
  }

  //Time being recalled on inverval
  displayTime();
  setInterval(displayTime, 1000);

  //Run on pageload to fetch & display localStorage data
  displayStorage();
});
