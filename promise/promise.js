const promiseTwo = new Promise(function (resolve, reject) {
    // do an async task
    setTimeout(function () {
      console.log("asyn task is complete");
  
      resolve(); // now it connect to then
    }, 1000);
  });
  
  promiseTwo.then(function () {
    // is then ka connection ha resolve k sath
    console.log("promise consumed");
  });
  
  // ******without variable ***********//
  
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("this is a task 2");
      resolve();
    }, 1000);
  }).then(function () {
    console.log("there is another task");
  });
  
  // *****Another example ************//this is how to pass the data from resolve to then
  
  const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ name: "shazi", phoneNo: "24232525245" }); // ese resolve ma ham parameter paas kr skte hain to usko then ma paas kr skte hain to wo parameter then ma mil jayega
    }, 1000);
  });
  
  promiseThree.then(function (hey) {
    console.log(hey);
  });
  
  
  // ******rejection error and catch ki kahani ******//
  
  const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error2 = false
      if (!error2) {
          resolve({username: "shazishiza", relation: "hubbbywify"})
      }else{
          reject('ERROR: Something went wrong')
      }
  },1000)
  })
  
  promiseFour.then((hey)=>{
  console.log(hey);
  return hey.username
  }).then((username)=>{
  console.log(username);
  }).catch(function(error){
  console.log(error);
  })
  
  // *****error k false ka chakkar*******//
  
  // const promiseFour = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     let error2 = false;
  //     if (!error2) {
  //       resolve({ username: "shazishiza", relation: "hubbbywify" });
  //     } else {
  //       reject("ERROR: Something went wrong");
  //     }
  //   }, 1000);
  // });
  
  // promiseFour
  //   .then((hey) => {
  //     console.log(hey);
  //     return hey.username;
  //   })
  //   .then((username) => {
  //     console.log(username);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  //   .finally(() => console.log("i m missing you"));
  
  
  
  
  // *****.then .catch k illawa ye b ap use kr skte hhain,,, trycatch*****//
  
  // const promiseFive = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     let error = true;
  //     if (!error) {
  //       resolve({ username: "shiza", relation: "my love" });
  //     } else {
  //       reject("ERROR: JS Went wrong");
  //     }
  //   }, 1000);
  // });
  
  // async function heynewPromise(){
  //     try {
  //         const whoAre = await promiseFive
  //         console.log(whoAre);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  
  // heynewPromise()
  
  
  
  // const promiseFive = new Promise(function (resolve, reject) {
  //     setTimeout(function () {
  //       let error = false;
  //       if (!error) {
  //         resolve({ username: "shiza", relation: "my love" });
  //       } else {
  //         reject("ERROR: JS Went wrong");
  //       }
  //     }, 1000);
  //   });
    
  //   async function heynewPromise(){
  //       try {
  //           const whoAre = await promiseFive
  //           console.log(whoAre);
  //       } catch (error) {
  //           console.log(error);
  //       }
  //   }
    
  //   heynewPromise()
  
  
  
  //*******some concept about fetch************** */
  
  async function getalluser(){
  try {
    const hey = await fetch('https://jsonplaceholder.typicode.com/users')
    const nope = await hey.json()
    console.log(nope);
  } catch (error) {
    console.log("E:", error);
  }
  }
  getalluser()