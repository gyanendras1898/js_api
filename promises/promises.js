const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 400);
  setTimeout(() => {
    if (delay > 200) {
      failure("connection lost");
    } else {
      success("Here your fake request");
    }
  }, delay);
};

// fakeRequestCallback(
//   "book.com/page1",
//   function (res) {
//     console.log("it worked!!(page1)");
//     console.log(res);
//     fakeRequestCallback(
//       "book2.com",
//       function (res) {
//         console.log("Its work 2nd time (page2)");
//         console.log(res);
//       },
//       function (res) {
//         console.log("OOPs you fail 2nd time (page2)");
//         console.log(res);
//       }
//     );
//   },
//   function (res) {
//     console.log("OOPSS failure (page1)", res);
//   }
// );

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 400);
    setTimeout(() => {
      if (delay > 200) reject("Connection lost");
      else resolve("Here is your fake data");
    }, delay);
  });
};

// fakeRequestPromise("google.com/page1")
//   .then((res) => {
//     console.log("IT Worked!! (page1)");
//     fakeRequestPromise("google.com//page2")
//       .then((res) => {
//         console.log("ITS worked (page2)");
//       })
//       .catch(() => {
//         console.log("Its a Failure (page2)");
//       });
//   })
//   .catch(() => {
//     console.log("OOPs failure (page1");
//   });

fakeRequestPromise("book.com/page")
  .then(() => {
    console.log("Its worked page1");
    return fakeRequestPromise("book.com/page2");
  })
  .then(() => {
    console.log("ITS worked (page2)");
  })
  .catch(() => {
    console.log("something error");
  });
