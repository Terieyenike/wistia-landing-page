window._wq = window._wq || [];
_wq.push({
  id: 'o21yc8lutk',
  onReady: function(video) {
    console.log('I got a handle to the video!', video);
  }
});

$('#play').click(function() {
  _wq.push({
    id: 'o21yc8lutk',
    onReady: function(video) {
      video.play();
      video.unmute();
    }
  });
});
