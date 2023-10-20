// Defining calculate function
function calculate() {
    console.log("Inside function calculate()");

    const PI = 3.14;

    let radius = document.getElementById("radius");    
    let answer = document.getElementById("answer");
    let msg    = document.getElementById("msg");

    var radiusValue = parseFloat(radius.value);   
    console.log("radiusValue : " + radiusValue);    

    if (radiusValue) {
        msg.innerHTML = "";
        radius.value = radiusValue;    

        let radiusValue2 = Math.pow(radiusValue, 2); // radiusValue * radiusValue
        let answerValue  = PI * radiusValue2;
        answerValue = parseFloat(answerValue);
        answerValue = answerValue.toFixed(2);
        console.log("answerValue : " + answerValue);

        answer.innerHTML = answerValue;
    } else {
        answer.innerHTML = "";
        msg.innerHTML = "Please enter valid Radius";
        radius.focus();        
    }
}
 
// Defining showTime function
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min  = time.getMinutes();
    let sec  = time.getSeconds();
    am_pm    = " A.M";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = " P.M";
    } else if (hour == 0) {
        hr = 12;
        am_pm = " A.M";
    }
 
    hour = hour < 10 ? "0" + hour : hour; 
    min  = min  < 10 ? "0" + min  : min;
    sec  = sec  < 10 ? "0" + sec  : sec;
 
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
 
    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
}
setInterval(showTime, 1000); // Calling showTime function at every second

// Footer Dynamic Year
let year = document.getElementById("year"); 
if (typeof year !== "undefined") {
    year.innerHTML = new Date().getFullYear();
}