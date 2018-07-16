

// const getLastEvent = (username) => {
//     const token = '3338b78f5407c02fed99cb8bb6afc544a5e1a88b';
//     const url = `https://api.github.com/users/${username}/events/public`;
//
//     return fetch(url,{headers: {'Authorization': `token ${token}`}});
// };
// getLastEvent('Mando72').then((data) => {
//     console.log(data);
// });




const getLastCommitFrom = (username) => {
    const token = '663cc583a842ae781235e8ec99eec5d43cdce83c';
    const url = `https://api.github.com/users/${username}/events`;

    return fetch(url, {
        headers: {
            "Authorization": `token ${token}`
        },
    })
};
getLastCommitFrom('Mando72').then( (data) => {
    console.log(data);
    return data.json();
}).then(data => {
    console.log(data);
});





// const lastCommit = (username) => {
//     const token = '3338b78f5407c02fed99cb8bb6afc544a5e1a88b';
//
//
//     //fetching JSON object from github with the passed in username
//     fetch(`https://api.github.com/users/${username}/events/public`, {
//         headers: {
//             'Authorization': 'token '
//         }
//
//         //if promise resolves - turn the response into response.json to dig into the object
//     }).then(response => response.json()
//
//     //dig deeper into object to return last commit data and log the string below
//         .then(data => {
//             console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)
//
//             //if promise rejects - log the error 'BAD REQUEST'
//         })).catch(() => console.error("BAD REQUEST"))};
