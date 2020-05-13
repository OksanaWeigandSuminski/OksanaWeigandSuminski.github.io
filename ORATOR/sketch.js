var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
let classifier;
let sound;
let modelURL = 'https://teachablemachine.withgoogle.com/models/nQWbm7NRY/';

  // Load the model
    function preload() {
      classifier = ml5.soundClassifier(modelURL + 'model.json');
      sound = loadSound("Fail.mp3");
}
	function setup() {
      
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
           if (gotResult && confidenceRatio > 50){
              sound.play();
              } 
    
}

document.getElementById('input-file')
  .addEventListener('change', getFile)

function getFile(event) {
	const input = event.target
  if ('files' in input && input.files.length > 0) {
	  placeFileContent(
      document.getElementById('content-target'),
      input.files[0])
  }
}

function placeFileContent(target, file) {
	readFileContent(file).then(content => {
  	target.value = content
  }).catch(error => console.log(error))
}

function readFileContent(file) {
	const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = event => resolve(event.target.result)
    reader.onerror = error => reject(error)
    reader.readAsText(file)
  })
}
