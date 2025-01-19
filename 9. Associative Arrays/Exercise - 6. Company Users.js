function companyUsers(arr) {
  let companyEmployees = {};

  for (const employeeData of arr) {
    let [company, employeeId] = employeeData.split(" -> ");

    if (company in companyEmployees) {
      if (!companyEmployees[company].includes(employeeId)) {
        companyEmployees[company].push(employeeId);
      }
    } else {
      companyEmployees[company] = [employeeId];
    }
  }

  let companyEntries = Object.entries(companyEmployees);

  companyEntries.sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name, employeeIdArr] of companyEntries) {
    console.log(name);

    for (const employeeId of employeeIdArr) {
      console.log(`-- ${employeeId}`);
    }
  }
}
companyUsers();
