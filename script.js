document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
      const text = document.getElementById('textToRead').value;  
      const speed = document.getElementById('speed').value;      
  		const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = parseInt(speed);
      synth.speak(utterance);
    });
  });
