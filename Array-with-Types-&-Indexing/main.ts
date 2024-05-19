 
// Step 1: Define the type alias named Employee
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
};

// Step 2: Define an array named employees containing employee objects
const employees: Employee[] = [
    { name: "Rabia", hoursWorked: 22, hourlyRate: 15, salary: 0 },
    { name: "Bilal", hoursWorked: 18, hourlyRate: 20, salary: 0 },
    { name: "Eshal", hoursWorked: 25, hourlyRate: 10, salary: 0 },
    { name: "Maryam", hoursWorked: 30, hourlyRate: 12, salary: 0 }
];

// Step 3 and 4: Implement the calculateSalary function
function calculateSalary(employee: Employee): number {
    // Calculate basic salary
    let basicSalary = employee.hoursWorked * employee.hourlyRate;

    // Check if hoursWorked is 20 or more to apply bonus
    if (employee.hoursWorked >= 20) {
        // Apply 10% bonus
        basicSalary += basicSalary * 0.10;
        console.log(`Bonus is given`);
    }

    // Update the salary property of the employee
    employee.salary = basicSalary;

    // Return the final salary
    return basicSalary;
}

// Calculate the salary for each employee in the array
for (let emp of employees) {
    calculateSalary(emp);
}

// Display the results
for (let emp of employees) {
    console.log(`Employee: ${emp.name}, Salary: ${emp.salary.toFixed(2)}`);
};