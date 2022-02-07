var prediction;

Webcam.set({

    width: 350,

    height: 300,

    image_format: "png",

    png_quality: 90

});

Camera = document.getElementById("camera");

Webcam.attach("#Camera");

function TakeSnapshot() {

    Webcam.snap(function (data_uri) {

        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>"

    })

}

console.log("ml5 version", ml5.version);

Classifer = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/u1nF1Dkh0/model.json", modelloaded);

function modelloaded() {

    console.log("Model Loaded");

}

function speak() {

    Synth = window.speechSynthesis;

    talk = "the prediction is " + prediction;

    utterthis = new SpeechSynthesisUtterance(talk);

    Synth.speak(utterthis);

}

function Check() {

    img = document.getElementById("captured_image");

    Classifer.classify(img,Getresults);
    
}

function Getresults(error,results) {

    if (error) {

        console.log(error);
        
    }
    else{

        console.log(results);

        document.getElementById("result_guesture_name").innerHTML = results[0].label;

        prediction = results[0].label;

        speak();

        if (results[0].label == "ok") {

            document.getElementById("guesture").innerHTML = "&#128077;"
            
        }

        if (results[0].label == "amazing") {

            document.getElementById("guesture").innerHTML = "&#128076;"
            
        }

        if (results[0].label == "victory") {

            document.getElementById("guesture").innerHTML = "&#9996;"
            
        }

    }
    
}