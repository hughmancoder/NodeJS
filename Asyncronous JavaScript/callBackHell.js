
// sycronous / blocking program
console.log("block 1");
console.log("block 2");

// asycronous / non-blocking program

function getUser(id, callback) {
    console.log("before");
    setTimeout(() => {
    callback({id: id, gitHubUsername: 'hughmancoder'});
    return 
    }, 200); // 200 ms delay
}

// sycronous function
function getRepositoriesSync(username) { 
    return ['repo1', 'repo2', 'repo3'];
}

// asycronous equivalent
function getRepositories(username, callback) { 
    setTimeout(() => {
    console.log("getting repositories");
    return (['repo1', 'repo2', 'repo3']);
}, 200)
}

// nested functions: callback hell (christmas tree problem)
const repos = getRepositories("hughmancoder", function(repos){
    const user = getUser("1", function(user) {
        console.log('User', user);
    });
});



