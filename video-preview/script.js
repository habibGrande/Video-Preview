console.log("page loaded...");

const previewVideo = document.getElementById('previewVideo');

        previewVideo.addEventListener('mouseover', () => {
            previewVideo.play();
        });
        
        previewVideo.addEventListener('mouseout', () =>{
            previewVideo.pause();
        });
            