const peopleN = require("../country/state/city/index");
const firstName = require("../utilities/utils/index");
const getPeopleInCity = (peopleN) => {
  return firstName(peopleN);
};
module.exports = getPeopleInCity;
