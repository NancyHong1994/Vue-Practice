const main = new Vue ({
    el: "#app",
    data: {
        john: {
            first: 'john',
            last: 'Hong',
            age: 20
        },
        abby: {
            first: 'abby',
            last: 'Song',
            age: '25'
        }
    },
    template: '<div><h2> name: {{ john.first }} </h2></div>'
})