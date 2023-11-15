/*

Filename: ComplexCode.js

Description:
This code demonstrates a complex JavaScript implementation of a basic payroll system. It incorporates multiple classes, functions, and data structures to handle employee details, salary calculations, and payroll management.

Please note that this code is purely fictional and for demonstration purposes only. It does not accurately represent a real-world payroll system.

*/

// Employee Class definition
class Employee {
  constructor(id, name, salary, department) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
  
  get bonus() {
    return 0; // Placeholder for custom bonus calculation
  }
  
  calculateMonthlySalary() {
    return this.salary / 12;
  }
}

// Manager Class definition (inherits from Employee)
class Manager extends Employee {
  constructor(id, name, salary, department, subordinateIds) {
    super(id, name, salary, department);
    this.subordinateIds = subordinateIds;
  }
  
  get bonus() {
    return this.subordinateIds.length * 500; // Custom bonus calculation for Managers
  }
}

// HR Department Class definition
class HRDepartment {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  
  hireEmployee(id, name, salary, department) {
    const newEmployee = new Employee(id, name, salary, department);
    this.employees.push(newEmployee);
  }
  
  getEmployeeCount() {
    return this.employees.length;
  }
  
  calculateTotalSalary() {
    let totalSalary = 0;
    for (const employee of this.employees) {
      totalSalary += employee.salary;
    }
    return totalSalary;
  }
  
  calculateMonthlyPayroll() {
    let payroll = {};
    for (const employee of this.employees) {
      const monthlySalary = employee.calculateMonthlySalary();
      payroll[employee.id] = monthlySalary;
    }
    return payroll;
  }
}

// Initialization and usage

// Creating HR Department
const hrDepartment = new HRDepartment("Human Resources");

// Hiring employees
hrDepartment.hireEmployee(1, "John Doe", 5000, "Development");
hrDepartment.hireEmployee(2, "Jane Smith", 6000, "Development");
hrDepartment.hireEmployee(3, "Michael Johnson", 7000, "Sales");
hrDepartment.hireEmployee(4, "Emily Davis", 4000, "Marketing");

// Creating a Manager
const manager = new Manager(5, "Robert Brown", 10000, "Development", [1, 2]);

// Adding Manager to the HR Department employees
hrDepartment.employees.push(manager);

// Printing the total employee count in HR Department
console.log("Total Employee Count:", hrDepartment.getEmployeeCount());

// Calculating and printing the total salary of all employees
console.log("Total Salary:", hrDepartment.calculateTotalSalary());

// Calculating and printing monthly payroll of all employees
console.log("Monthly Payroll:", hrDepartment.calculateMonthlyPayroll());

// Calculating and printing the bonus of the Manager
console.log("Manager Bonus:", manager.bonus);