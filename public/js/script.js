const videoContaienr = document.getElementById("videocontainer");
const myVideo = document.createElement("video");
myVideo.muted = true;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false,
  })
  .then((stream) => {
    myVideo.srcObject = stream;
    myVideo.addEventListener("loadedmetadata", () => {
        myVideo.play();
    });
    videoContaienr.append(myVideo)
  });