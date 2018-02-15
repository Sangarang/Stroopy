function gameover() {
document.getElementById("playagain").innerHTML = "Game Over";
clearTimeout(stop);
document.getElementById("overgame").style.zIndex = "5";
start();
}
function time() {
document.getElementById("playagain").innerHTML = "Time's Up";
clearTimeout(stop);
document.getElementById("overgame").style.zIndex = "5";
start();
}
