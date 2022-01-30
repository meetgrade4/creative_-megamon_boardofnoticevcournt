x = 0;
difference = 0;
left = 0;
right = 0;

function preload() {
    
}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(0,150);

    canvas = createCanvas(550,550);
    canvas.position(560,200);


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function draw() {
    background('black');
    textSize(x);
    fill('red');
    text('Meet', 50,500);
}

function modelLoaded() {
    console.log("the model is loaded");
}

function gotResults(result) {
    if(result.length > 0){
        console.log(result);
        left = result[0].pose.leftWrist.x;
        right = result[0].pose.rightWrist.x;
        console.log(left, right);
        difference =  left - right;
        x = Math.floor(difference);
        console.log(x);
    }
}