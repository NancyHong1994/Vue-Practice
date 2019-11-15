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
            age: 25
        }
    },
    computed: {
        changeAge: {
            get: function () {
                return this.abby.age + 1
            }
        }
    },
    filters: {
        filterAge: function (value) {
            if (value > 20) {
                return value + 10
            }
        }   
    },
    template: 
        `
         <div>
         <h2> name: {{ john.first }} </h2>
         <h2> age: {{ abby.age | filterAge }} <p>{{ changeAge }}</p></h2>
         </div>
        `
})