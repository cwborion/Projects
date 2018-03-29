// I hope I'm setting this up right...

// employer signup
export const submitSignup = (data) => {
  return fetch('http://localhost:3001/employer/signup', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}; 

// employer create job post

export const submitCreateJob = (data) => {
  return fetch('http://localhost:3001/job', {
    method: 'POST',
    mode: 'CORS',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    return res;
  }).catch(err => err);
}; 


//Commented out code is how Piyush set up the request URL with a dynamic string.

export const getJobs = (companyid) => {
  return fetch(`http://localhost:3001/job?companyid=${companyid}&limit=20`, {
    method: 'GET',
    mode: 'CORS',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    return data;
  }).catch(err => {console.log('Error: ', err)});
}; 

// export const getJobs = (companyid) => {
//   return fetch('http://localhost:3001/job', {
//     method: 'GET',
//     mode: 'CORS',
//     headers: {
//       'Accept': 'application/json'
//     }
//   }).then(res => {
//     return res;
//   }).catch(err => {console.log('Error: ', err)});
// }; 

