document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", function() {
    const text = document.getElementById('textToRead').value;  
    const speed = document.getElementById('speed').value;      
    const synth = window.speechSynthesis;
    const chunks = text.split(/[\.,]\s/);
    let i = 0;
    const speakChunks = () => {
      if (i < chunks.length) {
        const utterance = new SpeechSynthesisUtterance(chunks[i] + '.');
        utterance.lang = 'en-GB';
        utterance.rate = parseInt(speed);
        synth.speak(utterance);
        i++;
        utterance.onend = speakChunks;
      }
    };
    speakChunks();
  });
});
