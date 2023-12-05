song = "";
song1 = "";

function preload()
{
    song = loadSound("m.mp3");
    song1 = loadSound("m2.mp3");
}
function setup()
{
    canvas = createCanvas(610, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(0,0,650,600);
}