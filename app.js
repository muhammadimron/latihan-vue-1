var app = new Vue({
    el: "#app-vue",
    data: {
        name: "Imron",
        job: "IT Specialist",
        website: "https://muhammadimron.github.io/",
        webTag: "<a href='https://muhammadimron.github.io/'>Blog</a>",
        age: 23,
        x: 0,
        y: 0,
        inputName: "",
        inputAge: "",
        a: 0,
        b: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        characters: ["Char1", "Char2", "Char3", "Char4"],
        ninjas: [
            {name: "Ichi", age: 25},
            {name: "Ni", age: 24},
            {name: "San", age: 23},
        ],
        health: 100,
        ended: false,
    },
    methods: {
        greetings: function (time) {
            return `Good ${time}, ${this.name}!!`;
        },
        add: function (year) {
            this.age += year;
        },
        substract: function (year) {
            this.age -= year;
        },
        updateXY: function (e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        notify: function () {
            alert("You clicked me");
        },
        logName: function () {
            console.log("You have enter your name");
        },
        logAge: function () {
            console.log("You have alt+enter your age");
        },
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        },
    },
    computed: {
        addToA: function () {
            console.log("addToA");
            return this.age + this.a;
        },
        addToB: function () {
            console.log("addToB");
            return this.age + this.b;
        },
        compClass: function () {
            return {
                available: this.available,
                nearby: this.nearby,
            }
        }
    },
});
