

function setup()
{
    canvas = createCanvas(550 , 550);
    canvas.position(560 , 150 );

    
  video = createCapture(VIDEO);
  video.size(550, 500);


    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}


function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rigthWrist.x;
        difference = leftWristX - rigthWrist;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX =" + leftWristX  + "rigthWristX =" + rightWristX  + "difference =" + difference)

    }
}
