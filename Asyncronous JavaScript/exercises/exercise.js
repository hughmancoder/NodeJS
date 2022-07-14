// == re-writing functions below with promises ==

async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log("Customer: ", customer);
  if (customer.isGold) {
    TopMovies = await getTopMovies();
    console.log(TopMovies);
    await sendEmail(customer.email, TopMovies);
    console.log("Email sent...");
  }
}

notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Hugh Signoriello",
        isGold: true,
        email: "email",
      });
    }, 200);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 200);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(); // like void function
    }, 200);
  });
}

/*
console.log("Repeating the code with call-back based approach (less clean)");
// written on callback based approach (callback-hell)
getCustomer(1, (customer) => {
  console.log("Customer: ", customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log("Top movies: ", movies);
      sendEmail(customer.email, movies, () => {
        console.log("Email sent...");
      });
    });
  }
});

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Hugh Signoriello",
      isGold: true,
      email: "email",
    });
  }, 200);
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(["movie1", "movie2"]);
  }, 200);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 200);
}
*/