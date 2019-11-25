Vue.component('sample', {
    props: ['friend'],
    filters: {
        fullname(friend) {
            return `${friend.first},${friend.last}`
        },
        ageInOneYear(friend) {
            return friend.age + 1;
        },
    },
    methods: {
        decrementAge(friend) {
            friend.age = friend.age - 1
        },
        incrementAge(friend) {
            friend.age = friend.age + 1
        }
    },
    template: 
    `
    <div>
        <h1> {{friend | fullname}} </h1>
        <h2> {{friend.age}} </h2>
        <button v-on:click="decrementAge(friend)"> - </button>
        <button v-on:click="incrementAge(friend)"> + </button>
        <input type="text" v-model="friend.first" />
        <input type="text" v-model="friend.last" />
    </div>
    `
})

const main = new Vue({
    el: '#app',
    data: {
        friends: [
            {
                first: 'abby',
                last: 'Hong',
                age: 20
            },
            {
                first: 'john',
                last: 'song',
                age: 25
            }
        ]
    },
    template: 
    `
    <div>
    <sample v-for="friend in friends" v-bind:friend = "friend"/>
    </div>
    `
})