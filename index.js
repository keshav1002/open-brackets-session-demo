const students = require("./students");

const getStudentFullName = ({ firstName = null, lastName = null }) => {
  if (!firstName || !lastName) {
    throw Error("Firstname or Lastname is missing");
  }

  return `${firstName} ${lastName}`
};

const calculateTotalMarks = ({ languages = [] }) => {
  if (!languages.length) return;

  return languages.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0);
}

const testFunction = () => true;

/**
 * This function will return the student object related to the id
 * This method acutally a mock method for http
 * @param {Number} studentId 
 * @returns {any} student object which is mapped to the student id
 */
const getRelatedStudentById = (studentId = null) => new Promise((resolve, reject) => {
  !studentId ? reject("Student id is not passed") : resolve(students[`${studentId}`])
});

const summarizeStudentDetails = async (studentId = null) => {
  if (!studentId) console.log("Student id is not provided");

  testFunction();

  const student = await getRelatedStudentById(studentId);

  console.log(`Student name : ${getStudentFullName(student)} --> Student total marks : ${calculateTotalMarks(student)}`);
}


Object.keys(students).forEach(id => summarizeStudentDetails(id));