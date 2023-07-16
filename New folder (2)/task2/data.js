const fs = require("fs");

// Add data
const addPerson = (fname, lname, age, city, id) => {
  const allData = loadData();
  const duplicateData = allData.filter((obj) => {
    return obj.id === id;
  });

  if (duplicateData.length === 0 && id <= 7) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      age: age,
      city: city,
    });
    saveAllData(allData);
  } else {
    console.log("Error: Duplicate id");
  }
};

// Load data
const loadData = () => {
  try {
    const dataJson = fs.readFileSync("data.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// Save all data
const saveAllData = (allData) => {
  const saveAllDataJson = JSON.stringify(allData);
  fs.writeFileSync("data.json", saveAllDataJson);
};

// Delete data
const deleteData = (id) => {
  const allData = loadData();
  const dataToKeep = allData.filter((obj) => {
    return obj.id !== 4 && obj.id !== 6;
  });
  saveAllData(dataToKeep);
  console.log(dataToKeep);
};

// Read data
const readData = () => {
  const allData = loadData();
  const itemNeeded = allData.find((obj) => {
    return obj.id === 5;
  });
  console.log(itemNeeded);
};

// List data
const listData = () => {
  const allData = loadData();
  allData.forEach((obj) => {
    console.log(obj.fname, obj.lname, obj.city);
  });
};

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData,
};