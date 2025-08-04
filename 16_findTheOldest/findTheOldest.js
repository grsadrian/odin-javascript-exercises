const findTheOldest = function (persons) {
  return persons.reduce((oldest, currentPerson) => {
    const oldestAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : new Date().getFullYear() - oldest.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath
      ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
      : new Date().getFullYear() - currentPerson.yearOfBirth;

    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
