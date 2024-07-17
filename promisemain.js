new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log("async task 2");
      resolve();
    }, 1000);
  }).then(function() {
    console.log("async 2 resolved");
  });
  
  const PromiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ username: "lalit", email: "lalitrajput232002@gmail.com" });
    }, 1000);
  });
  
  PromiseThree.then(function(data) {
    console.log(data.username);
  });

  
  const fourth = new Promise(function(resolve, reject) {
    setTimeout(function() {
      let error = false;
      if (!error) {
        resolve({ username: "Lalit", password: "135" });
      } else {
        reject('Error: something went wrong');
      }
    }, 1000);
  });
  
  fourth.then(function(data) {
    console.log(data);
  }).catch(function(error) {
    console.log(error);
  }).finally(()=> console.log("The promise is either resolved or the rejected "));

  const fivepromise = new Promise(function(resolve ,reject){
    setTimeout(function() {
        let error = true;
        if (!error) {
          resolve({ username: "Lalit ji ", password: " 546 " });
        } else {
          reject('Error: js went wrong');
        }
      }, 1000);
  });
//   async function consumeFivePromise() {
//     try {
//       const response = await fivepromise;
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  // this is for  ..

  async function consumeFivePromise(){
    try{
        const response=await  fivepromise
         console.log(response);     
    } catch(error){
        console.log(error);
        }
  }
  // consumeFivePromise()
  //  async function getallusers(){
  //   try { const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = response.json()
  //     console.log(data);
      
  //   } catch (error) {
  //     console.log("  Error ")
  //   }
  //  }
  //  getallusers()
  fetch('https://api.github.com/users/hiteshchaudary')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
