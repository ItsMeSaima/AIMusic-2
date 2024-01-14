song1 = "";
song2 = "";

function preload(){
    song1.loadSound("PeterPan.mp3");
    song2.loadSound("HarryPotter.mp3");
}

function setup() {
     canvas =  createCanvas(600, 500);
     canvas.center();
     canvas.position(360,260);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function play(){
    
}