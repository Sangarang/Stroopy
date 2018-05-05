function myFunctiontimer() {
document.getElementById("clock").style.color = "white";
document.getElementById("clock").innerHTML = "4";
stop = setTimeout(myFunctiontimer1, sec);}

function myFunctiontimer1() {
document.getElementById("clock").innerHTML = "3";
stop = setTimeout(myFunctiontimer2, sec);}

function myFunctiontimer2() {
document.getElementById("clock").innerHTML = "2";
stop = setTimeout(myFunctiontimer3, sec);}

function myFunctiontimer3() {
document.getElementById("clock").innerHTML = "1";
stop = setTimeout(myFunctiontimer4, sec);}

function myFunctiontimer4() {
document.getElementById("clock").innerHTML = "0";
setTimeout(time, 250);}

function hard() {
sec = sec - 0.83;
scan();
setTimeout(hard, 1000);
}

function scan() {
if(sec <= 5)
sec = 0;
}
