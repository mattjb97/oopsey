// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }

}
// let matthew = new Employee('matthew', 23,'bohlmatthew@gmail.com')
// console.table(matthew)
// console.log(matthew.getName())

module.exports = Employee
