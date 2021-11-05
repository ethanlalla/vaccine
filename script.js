var expiryDateTime = ("19 Nov 2021 15:30:25");
window.addEventListener('load', function(event){
   countdownTimer(expiryDateTime);
});
function countdownTimer(expiryDateTime){
    var countdownDateTime = new Date(expiryDateTime).getTime();


   var timeInterval = setInterval(function() {
   var currentDateTime = new Date().getTime();

   var remainingTime = countdownDateTime - currentDateTime;

   var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
   var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;



  if (remainingDayTime < 0) {
    clearInterval(timeInterval);
    document.getElementById("countdownTimer").innerHTML = "Fully Vaccinated!";
   }

 }, 1000);
}

var vaxCard = {
name: "Lasko Fan"

}
