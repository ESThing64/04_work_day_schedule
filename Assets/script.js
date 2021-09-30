var myInterval;
let timeNow = 0;


function displayTime(){
    myInterval = setInterval(function(){
        
        var currentTime = moment()

        // How can I set this vaule to a variable?
        $("#current-time").text(currentTime.format("H"));
        timeNow = currentTime.format("H");

       

        
    },1000)
}

displayTime()






// if time of the box  =  currentTime set color to red

// if time of the box > currenttime  setcolor to green

// if time of the box < current time set color to grey set class to expired














