const employeeTest = require("ava");
const Employee = require('../src/employee');

employeeTest('employeeTest1.Employee type is engineer', (t) => {
    //given
    const employee = new Employee("Alisa", "engineer");

    //when
    const result = employee.toString();

    //then
    t.is(result, "Alisa (engineer)")
})

employeeTest('employeeTest2.Employee type is manager', (t) => {
    //given
    const employee = new Employee("Alisa", "manager");

    //when
    const result = employee.toString();

    //then
    t.is(result, "Alisa (manager)")
})

employeeTest('employeeTest3.Employee type is salesman', (t) => {
    //given
    const employee = new Employee("Alisa", "salesman");

    //when
    const result = employee.toString();

    //then
    t.is(result, "Alisa (salesman)")
})

employeeTest('employeeTest4.Employee type is other', (t) => {
    //when
    try {
        new Employee("Alisa", "dev");
        t.fail();
    } catch(e) {
        t.is(e.message, "Employee cannot be of type dev")
    }
})