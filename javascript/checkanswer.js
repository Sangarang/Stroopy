function checkbrown() {
if (w =="1") {

if (u =="2") {

if (a =="1") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="8") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkpink() {
if (w =="1") {

if (u =="2") {

if (a =="2") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="7") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkorange() {
if (w =="1") {

if (u =="2") {

if (a =="4") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="6") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkpurple() {
if (w =="1") {

if (u =="2") {

if (a =="6") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="4") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkyellow() {
if (w =="1") {

if (u =="2") {

if (a =="7") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="3") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkgreen() {
if (w =="1") {

if (u =="2") {

if (a =="5") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="5") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkblue() {
if (w =="1") {

if (u =="2") {

if (a =="8") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="2") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function checkred() {
if (w =="1") {

if (u =="2") {

if (a =="3") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
else 
if (u =="1") {

if (x =="1") {
score = score + 1;
callClickers();
document.getElementById("score").innerHTML = score;

}
else
gameover();
}
}
}

function best1() {
if(best <= score)
best = score;
document.getElementById("bestie").innerHTML = best;
setTimeout(best1, 0);	
}
setTimeout(best1, 0);