const taxRate = 0.1;
const salary = 12000;
const salaryTax = salary * taxRate;

const taxHeading = document.querySelector(".tax");
taxHeading.textContent = salaryTax;
