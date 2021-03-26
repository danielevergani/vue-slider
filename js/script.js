var app = new Vue ({
    el: "#root",
    data: {
        images: [
            'https://i.pinimg.com/originals/ca/ca/aa/cacaaa6ed79406c476d60a60441ca502.jpg',
            'https://www.gorgolive.it/wp-content/uploads/2019/12/canada-2020.jpg',
            'https://images.lonelyplanetitalia.it/uploads/shutterstock-185800496?q=80&p=slider&s=4d256dfd284af350d8605473326767f9'
        ],
        imagesIndex: 0,

        background: [
            'back1',
            'back2',
            'back3'
        ],

        autoplay: null
    },

    mounted: function(){
       this.autoplay = setInterval(this.nextImg, 3000);
    },

    methods: {
        nextImg: function(){
            this.imagesIndex++;
            if( this.imagesIndex == this.images.length ){
                this.imagesIndex = 0;
            }
        },
        prevImg: function(){
            this.imagesIndex--;
            if( this.imagesIndex < 0 ){
                this.imagesIndex = this.images.length -1 ;
            }
        },
        circleSelection: function(i){
            this.imagesIndex = i;
        }
        
    }
})