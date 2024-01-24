function draw()
{
    image(video, 0, 0, 350, 300)
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();

    tint_color = "";
}

    circle(30, 30, 20);

    rectangle(30, 20, 55, 55, 20);

    rectangle(30, 20, 55, 55);


function take_snapshot()
{
    save('firstProjectPic.png');
}
