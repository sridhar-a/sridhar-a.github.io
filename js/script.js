function calculate() {
    console.log("Inside function calculate()");

    const PI = 3.14;

    let radius = document.getElementById("radius");    
    let answer  = document.getElementById("answer");

    var radiusValue = parseFloat(radius.value);   
    console.log("radiusValue : " + radiusValue);    

    radius.value = radiusValue;    

    let answerValue = PI * radiusValue * radiusValue;
    answerValue = parseFloat(answerValue);
    answerValue = answerValue.toFixed(2);
    console.log("answerValue : " + answerValue);

    answer.innerHTML = answerValue;
}

// Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime function
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " P.M";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " A.M";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();