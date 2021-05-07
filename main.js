//https://teachablemachine.withgoogle.com/models/YFNyf9sW7/model.json

p1="";
p2="";
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:100
});
camera=document.getElementById("webcam");
Webcam.attach(camera);

function takepic(){
    Webcam.snap(function(pic){
     document.getElementById("result").innerHTML='<img id="snap_pic" src="'+pic+'"/>'; 
    });
}
console.log('ml5 version:',ml5.version );
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelloaded);

function modelloaded(){
    console.log("Model Loaded Succesfully!");