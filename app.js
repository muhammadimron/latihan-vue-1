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
    },
});
