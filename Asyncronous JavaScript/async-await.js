userObj = getUser(1).then((user) => console.log(user));

// == promise based approach ==
userObj1 = getUser(1)
  .then((user) => getRepositories(user.gitHubUsername))
  .then((repos) => console.log(repos[0]))
  .catch((err) => console.log("Error", err.message)); // function calls if any errors occur

// == using async / await ==
async function displayRepos() {
  try {
    const user = await getUser(1); // looks non-asyncronous but actually isn't!
    const repos = await getRepositories(user.gitHubUsername);
    console.log(repos[0]); // much easier to read
    console.log("asyncronous call complete");
  } catch (err) {
    console.log("Error", err.message);
  }
}

displayRepos();
console.log("program running while asyncronous calls are being processed");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading user from database");
      resolve({ id: id, gitHubUsername: "Hugh" });
    }, 200);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling github Api");
      resolve(["repo1", "repo2", "repo3"]);
    }, 200);
  });
}
