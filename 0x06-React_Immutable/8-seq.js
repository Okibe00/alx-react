const { Seq } = require('immutable');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function printBestStudents(grades) {
  const studentsSeq = Seq(grades);

  // Filter students with a score >= 70
  const bestStudents = studentsSeq
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }));
  console.log(bestStudents.toJS());
}

module.exports = {
  printBestStudents,
};
