const fs = require("fs");

// Step 1: Create person object
const person = {
  fname: "ahmed",
  lname: "hossam",
  age: 20,
  city: "alex",
};

// Step 2: Convert object to JSON
const personJson = JSON.stringify(person);

// Step 3: Store JSON in a file
fs.writeFileSync("person.json", personJson);

// Step 4: Read JSON from file
const fileData = fs.readFileSync("person.json");

// Step 5: Convert JSON back to object
const personObj = JSON.parse(fileData);

// Step 6: Update person object
personObj.fname = "adel";
personObj.lname = "ahmed";
personObj.age = 40;
personObj.city = "cairo";

// Step 7: Convert updated object back to JSON
const updatedPersonJson = JSON.stringify(personObj);

// Step 8: Store updated JSON in a file
fs.writeFileSync("updated-person.json", updatedPersonJson);
