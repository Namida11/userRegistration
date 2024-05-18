const fs = require("fs");
const path = require("path");
const util = require("util");
const generateUniqueId = require("../utils/id-generator");

const rootFolerPath = path.join(__dirname, "..");
const DB_PATH = path.join(rootFolerPath, "database/db.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllJSONDataFromText() {
  const allText = await readFileAsync(DB_PATH);
  const allData = JSON.parse(allText);
  return allData;
}

async function getData(key) {
  const allData = await getAllJSONDataFromText();
  return allData[key];
}

async function insertData(jsonKey, model) {
  const allData = await getAllJSONDataFromText();

  const newModel = { id: generateUniqueId(allData[jsonKey]), ...model };

  allData[jsonKey].push(newModel);
  await writeFileAsync(DB_PATH, JSON.stringify(allData, null, 2));
  return newModel;
}

module.exports = {
  getData,
  insertData,
};
