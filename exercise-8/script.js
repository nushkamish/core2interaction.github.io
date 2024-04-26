function updateTime() {


    //////// GET CURRENT DATE AND TIME ////////
    
    let today = new Date();
    console.log(today);




// GET CURRENT MINUTE
let thisHour = today.getHours();
console.log(thisHour);

// GET CURRENT MINUTE
let thisMinute = today.getMinutes();
console.log(thisMinute);

// GET CURRENT SECOND
let thisSecond = today.getSeconds();
console.log(thisSecond);
  
// CONDITIONALS to add a 0 when it's a single digit 
if(thisSecond < 10) {
  thisSecond = "0" + thisSecond;
}
  
if(thisMinute < 10) {
  thisMinute = "0" + thisMinute;
}
  
if(thisHour < 10) {
  thisHour = "0" + thisHour;
}
  
// to not make is army time 

if(thisHour > 12) {
  thisHour = thisHour - 12;
}


// ADD TO INNER HTML: it won't be visible in the html unless you add it
let timeElem = document.getElementById("time");
timeElem.innerHTML = thisHour + ":" + thisMinute + ":" + thisSecond;
  
}

setInterval(updateTime, 1000);

// to make the circle bigger



function secondsVisualizer() {
    let circle = document.getElementById("shape");
    let today = new Date();
    let thisSecond = today.getMinutes();
    



   let timeToSize = map (thisSecond, 0,59,100, 700)
   console.log(timeToSize);

 

   circle.style.width = timeToSize + "px";
   circle.style.height = timeToSize + "px";

    

}

setInterval(secondsVisualizer, 1000);



// DON'T TOUCH THIS! this is just a formula to make sure mapping is working

function map(value, low1, high1, low2, high2){
  
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  
}
