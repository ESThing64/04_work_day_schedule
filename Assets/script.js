var myInterval;
let timeNow = 0;

//used to grab the value of the name attribute 1
var test = $("textarea")

//using for local storage and appending from localstorage to the document 
let save9h = $('#save9h')
let save10h = $('#save10h')
let save11h = $('#save11h')
let save12h = $('#save12h')
let save13h = $('#save13h')
let save14h = $('#save14h')
let save15h = $('#save15h')
let save16h = $('#save16h')
let save17h = $('#save17h')

var currentTime = moment()
timeNow = $(moment().hour())[0]; 
// timeNow = currentTime.format("H");

        //this loop will get the value of each name attribute on each textarea element and compairs it to the current time
        for (let i = 0; i < 9; i++) {
            
           
            
            if (test[i].name > timeNow){

               test[i].setAttribute("class", "future form-control myclass");

            } else if (test[i].name == timeNow){
                test[i].setAttribute("class", "current form-control myclass");
                
            } else if (test[i].name < timeNow) {
                test[i].setAttribute("class", "expired form-control myclass");
            }
        }
           
            
    

//this means anytime a button is pressed, everything in the function will be ran.
$('button').on('click', function(){
    localStorage.setItem('9h', save9h.val())
    localStorage.setItem('10h', save10h.val())
    localStorage.setItem('11h', save11h.val())
    localStorage.setItem('12h', save12h.val())
    localStorage.setItem('13h', save13h.val())
    localStorage.setItem('14h', save14h.val())
    localStorage.setItem('15h', save15h.val())
    localStorage.setItem('16h', save16h.val())
    localStorage.setItem('17h', save17h.val())
})




// gets from saved tasks from local storage
save9h.append(localStorage.getItem('9h'))
save10h.append(localStorage.getItem('10h'))
save11h.append(localStorage.getItem('11h'))
save12h.append(localStorage.getItem('12h'))
save13h.append(localStorage.getItem('13h'))
save14h.append(localStorage.getItem('14h'))
save15h.append(localStorage.getItem('15h'))
save16h.append(localStorage.getItem('16h'))
save17h.append(localStorage.getItem('17h'))








// displayTime()


// This is how I found my logic.
console.log($("textarea"))



// var = the time I want to compair\\\\\ to time now

//I set for 9 10 and 11

//can i set a for loop to run through this?


// if time of the box  =  currentTime set color to red

// if time of the box > currenttime  setcolor to green

// if time of the box < current time set color to grey set class to expired














