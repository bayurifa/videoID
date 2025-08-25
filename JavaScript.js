// Data video ID dan URL video
  const videoData = {
    "2025": "https://github.com/bayurifa/videoID/raw/refs/heads/main/Jumpscare.mp4",
    "cantik": "https://github.com/bayurifa/videoID/raw/refs/heads/main/Jumpscare.mp4",
    "bayu": "https://github.com/bayurifa/videoID/raw/refs/heads/main/Jumpscare.mp4"
  };

  const videoPlayer = document.getElementById('videoPlayer');
  const videoIdInput = document.getElementById('videoIdInput');
  const playBtn = document.getElementById('playBtn');
  const errorMsg = document.getElementById('errorMsg');

  playBtn.addEventListener('click', () => {
    const id = videoIdInput.value.trim();
    if (!id) {
      errorMsg.textContent = "Masukkan Video ID terlebih dahulu.";
      videoPlayer.pause();
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
      return;
    }
    if (videoData.hasOwnProperty(id)) {
      const videoUrl = videoData[id];
      videoPlayer.src = videoUrl;
      videoPlayer.play();
      errorMsg.textContent = "";
    } else {
      errorMsg.textContent = "Video ID tidak ditemukan.";
      videoPlayer.pause();
      videoPlayer.removeAttribute('src');
      videoPlayer.load();
    }
  });
