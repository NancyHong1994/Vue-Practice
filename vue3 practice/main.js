const main = new Vue ({
    el: "#app",
    data: {
        johns: [
            {
              first: "Bobby",
              last: "Boone",
              age: 10
            },
            {
              first: "John",
              last: "Boone",
              age: 20
            }
        ],
    },
    methods: {
        decrement: function (john) {
            john.age = john.age - 1
        },
        increment: function (john) {
            john.age = john.age + 1
        }
    },
    template: 
            `
            <div>
                <div v-for="john in johns">
                    <h1> {{ john.first }}, {{ john.last }}</h1>
                    <h2> age: {{ john.age }} </h2>
                    <button v-on:click="decrement(john)"> - </button> 
                    <button v-on:click="increment(john)"> + </button> 
                    <input type="text" v-model="john.first"> 
                    <input type="text" v-model="john.last">
                </div>
            </div>
            `
})