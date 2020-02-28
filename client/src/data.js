import statesArrObj from "./allStates";

const states = statesArrObj.states.map(s => {
  return s.state;
});

const districts = {};
statesArrObj.states.forEach(s => {
  districts[s.state] = s.districts;
});

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default {
  states,
  districts,
  bloodGroups
};
