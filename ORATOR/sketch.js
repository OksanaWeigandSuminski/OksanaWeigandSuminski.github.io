var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
let classifier;
let sound;
let modelURL = 'https://teachablemachine.withgoogle.com/models/nQWbm7NRY/';
let activated = false;



  // Load the model
    function preload() {
      classifier = ml5.soundClassifier(modelURL + 'model.json');
      
      sound = loadSound("Fail.mp3");
}
	function setup() {
        noCanvas();
  createFileInput(fileSelected);
  var button = select("#loadfile");
  button.mousePressed(loadFile);
      
      let continuous = true;
      let interim = false;
		myRec.onResult = showResult;
		myRec.start(continuous, interim);
        classifyAudio();
}
   function classifyAudio() {
      classifier.classify(gotResult);
           
}
	function showResult() {
       if (activated){
         classifyAudio();
       }
      else{
         
       myRec.resultValue = false;
        }
		 if(myRec.resultValue==true) {
          const p = document.createElement('p');
          p.innerHTML = myRec.resultString;
          document.getElementById("notepad").appendChild(p);
		  }
}
  
    function gotResult(error, results) {
        if (error) {
          console.error(error);
          return;
          }
         confidenceRatio = results[0].confidence / results[1].confidence;
         console.log(confidenceRatio);
         console.log(results[0].label);
         console.log(results[0].confidence);
            if (activated && gotResult && confidenceRatio > 50){
              sound.play();
              }
    
}
   function myFunction(){
  activated = !activated;
}

function loadFile() {
  loadStrings("MMP250.txt", fileloaded);
}

function fileLoaded(data) {
  createP(join(data, "<br/>"));
}
function fileSelected(file) {
createP(file.name + "" + file.size + "" + file.type);
  
if (file.type =="text") {  
createP(file.data);  
} else {
    createP("I need a text file.");
}
  
}

