const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

// Using the promise
myPromise.then((message) => {
    console.log(message);
});
//Write a Promise that rejects with an error "Something went wrong".
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("something went wrong");
    }, 2000);
});

// Using the promise
myPromise2.catch((message) => {
    console.log(message);
});