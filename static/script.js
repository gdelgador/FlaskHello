document.addEventListener('DOMContentLoaded', function() {

    document.querySelector("#status").style.display = "none";
    document.querySelector("#stop").style.display = "none";

    // document.querySelector('#voice').addEventListener('click', () => voice('say something'));

    voice('say something')

});

function voice(msg) {

    if ("webkitSpeechRecognition" in window) {
        let speechRecognition = new webkitSpeechRecognition();
        let final_transcript = "";

        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        speechRecognition.lang = 'es-PE';

        speechRecognition.onstart = () => {
            document.querySelector("#status").style.display = "block";
            document.querySelector("#stop").style.display = "block";
        };
        
        speechRecognition.onerror = () => {
            document.querySelector("#status").style.display = "none";
            document.querySelector("#stop").style.display = "none";
            console.log("Speech Recognition Error");
        };
        
        speechRecognition.onend = () => {
            document.querySelector("#status").style.display = "none";
            document.querySelector("#stop").style.display = "none";
            console.log("Speech Recognition Ended");
        };
        
        speechRecognition.onresult = (event) => {
            let interim_transcript = "";
        
            for (let i = event.resultIndex; i < event.results.length; ++i) {
              if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
              } else {
                interim_transcript += event.results[i][0].transcript;
              }
            }
            document.getElementById('searchbar').value = final_transcript; 
            document.getElementById('searchbar').value = interim_transcript ; 
          };

        // init speeach recoginz
        document.querySelector("#voice").onclick = () => {
            window.alert(msg)
            speechRecognition.start();
        };

        document.querySelector("#stop").onclick = () => {
            speechRecognition.stop();
            document.getElementById('search').submit();
        };

    } else {
        console.log("Speech Recognition Not Available");
      }

}