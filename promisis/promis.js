// const promisisOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Db call");
//     resolve();
//   }, 1000);
// });

// promisisOne.then(() => {
//   console.log("psomis consumerd");
// });
new Promise((res, rej) => {
  setTimeout(() => {
    // console.log("Db call");
    res();
  }, 1000);
}).then(() => {
  // console.log("consumed");
});

const promisThree = new Promise((res, rej) => {
  setTimeout(() => {
    res({ usermane: "akash", password: "Black" });
  }, 3000);
}).then((user) => {
  // console.log(user);
});

const promisFoutr = new Promise((res, rej) => {});
