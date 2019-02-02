<template>
    <div class="camera-modal">
        <video ref="video" class="camera-stream"/>
        <div class="camera-modal-container">
            <span @click="capture" class="take-picture-button take-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
              <i class="material-icons">camera</i>
            </span>
        </div>
    </div>
</template>
<script>
import {storage} from '../services/firebase';
import postCat from '../mixins/postcat';
export default {
    mixins: [postCat],
    data() {
        return {
            mediaStream: ''
        }
    },
    methods: {
        capture() {
            const mediaStreamTrack = this.mediaStream.getVideoTracks()[0];
            //capture the image
            const imageCapture = new ImageCapture(mediaStreamTrack);
            return imageCapture.takePhoto().then(blob => {
                console.log(blob);
                storage.ref().child(`images/picture-${new Date().getTime()}`)
                .put(blob)
                .then(res => {
                    console.log(res);
                    this.postCat(res.metadata.fullPath, 'Hello');
                    this.$router.go(-1);
                });
            });
        }
    },
    mounted () {
        //get the user permission to use the camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(mediaStream => {
            this.mediaStream = mediaStream;
            this.$refs.video.srcObject = mediaStream;
            this.$refs.video.play();
        })
        .catch(error => console.error('getUserMedia() error:', error))
    },
    destroyed () {      //close all open tracks(camera) when the component is destroyed
        const tracks = this.mediaStream.getTracks()
        tracks.map(track => track.stop())
    }
}
</script>
<style>
.camera-modal {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: white;
    z-index: 10;
}
.camera-stream {
    width: 100%;
    max-height: 100%;
}
.camera-modal-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    margin-bottom: 24px;
}
.take-picture-button {
    display: flex;
}
</style>
