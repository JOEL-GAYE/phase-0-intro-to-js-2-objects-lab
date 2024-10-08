// Write your solution in this file!
// Initial employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St",
  };
  
  // 1. Update Employee With Key and Value (Non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the updated key and value using the spread operator
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // 2. Destructively Update Employee With Key and Value
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly mutate the original employee object
    employee[key] = value;
    return employee;
  }
  
  // 3. Delete From Employee By Key (Non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the key-value pair using the spread operator
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructively Delete From Employee By Key
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object and delete the key
    delete employee[key];
    return employee;
  }
  