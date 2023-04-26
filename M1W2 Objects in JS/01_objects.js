const name = 'alice'
// const cohort = 'Ugup'
const isGrad = false;

const studentInfo2 = ['alice', 'ugup', false]

const studentInfo = {
  studentName: 'alice',
  'cohort': 'uGup',
  isGrad: false,
  '1': 'joe'
}

// console.log(studentInfo);
// console.log(studentInfo.studentName)
// console.log(studentInfo['studentName'])

// const cohort = 'April'

// console.log(studentInfo.cohort);
// console.log(studentInfo['cohort']);
// // console.log(studentInfo.April);
// console.log(studentInfo['1']);
// studentInfo['favColor'] = 'red' ;

// console.log(studentInfo);

// studentInfo.secondColor = 'blue';

// console.log(studentInfo);

// delete studentInfo.secondColor

// console.log(studentInfo);

const weather = {
  city: 'Vancouver',
  temp: [{
    min: 10,
    max: 15,
    current: 12
  }, 
  {
    min: 11,
    max: 12,
    current: null
  }],
  detail: {
    area: 20,
    additionalInfo: {
      current: 'cloudy'
    }
  },
  "1": 'number'
}

console.log(weather.city)
console.log(weather.detail.additionalInfo.current)
console.log(weather.temp[0].min)
console.log(weather.temp[1].min)

console.log(weather["1"]);

console.log(musiclib.tracks.artist);