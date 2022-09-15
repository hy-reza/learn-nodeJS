const aboutMe = {
  firstName: 'Handy',
  middleName: 'Reza',
  lastName: 'Alfanda',
  bornOn: '11 March 2001',
  liveIn: 'Malang',
}

const {firstName, middleName, lastName, bornOn, liveIn} = aboutMe;
const fullName = () => {
  return `${aboutMe.firstName} ${aboutMe.middleName} ${aboutMe.lastName}`
}

console.log(`Hello my name is ${fullName()}, u can call me ${middleName} i was born on ${liveIn}, ${bornOn}`);