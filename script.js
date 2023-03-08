const form = document.getElementById('download-form');
const input = document.getElementById('video-url');

form.addEventListener('submit', (event) => {
 event.preventDefault();
 const videoUrl = input.value;

 if (videoUrl.includes('youtube.com')) {
        const videoId = videoUrl.split('v=')[1];
        const downloadUrl = `https://www.youtube.com/watch?v=${videoId}`;
        window.location.href = downloadUrl;

    } else {
        alert('Please enter a valid YouTube video URL');
    }
});