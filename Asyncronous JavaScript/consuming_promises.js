userObj = getUser(1).then((user) => console.log(user));

// == avoids nested structure by using chaining == 
userObj1 = 
getUser(1)
.then((user) => getRepositories(user.gitHubUsername))
.then(repos => console.log(repos[0]))
.catch(err => console.log('Error', err.message)); // function calls if any errors occur


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
