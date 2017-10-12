var player = document.getElementById('player');
var recorder = document.getElementById('recorder');


recorder.addEventListener('change', function(e) {
  var file = e.target.files[0];
   // Do something with the audio file.
  player.src =  URL.createObjectURL(file);
});

var handleSuccess = function(stream) {
    if (window.URL) {
      player.src = window.URL.createObjectURL(stream);
    } else {
      player.src = stream;
    }
  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: false })
      .then(handleSuccess)

navigator.mediaDevices.enumerateDevices().then((devices) => {
  devices = devices.filter((d) => d.kind === 'audioinput');
});


var handleSuccess = function(stream) {
    var context = new AudioContext();
    var input = context.createMediaStreamSource(stream)
    var processor = context.createScriptProcessor(1024,1,1);

    source.connect(processor);
    processor.connect(context.destination);

    processor.onaudioprocess = function(e){
      // Do something with the data, i.e Convert this to WAV
      console.log(e.inputBuffer);
    };
  };

