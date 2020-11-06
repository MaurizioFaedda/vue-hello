var root = new Vue({

    el: '#root',

    data: {
        text: 'hello world',
        img1: 'images/natura1.jpg',
        img2: 'natura2.jpg',
        img3: 'images/natura3.jpg',
        // creo questo dato per aiutarmi a mettere dentro il numero random
        number: '1'


    },

    methods: {

        randomNumber : function(){
            return Math.floor(Math.random() * (5)) + 1;
        },

    },
})
