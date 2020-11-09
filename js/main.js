// START VUE JS 
const app = new Vue({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
        intervalId: 0,
    },
    created() {
        this.startLoop();
    },
    methods: {
        nextPhoto() {
            this.indexPhoto += 1;

            if (this.indexPhoto > (this.photos.length - 1) ) {
               this.indexPhoto = 0;
            }
        },
        prevPhoto() {
            this.indexPhoto -= 1;

            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        },
        startLoop() {
            this.intervalId = setInterval(() => {
                this.nextPhoto();
            }, 3000);
        },
        stopLoop() {
            clearInterval(this.intervalId);
        },
    },
});