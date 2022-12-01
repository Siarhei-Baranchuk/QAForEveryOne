const axios = require('axios')
const API_URL = 'http://enduring-server.herokuapp.com/v3/graphql'

var data = JSON.stringify({
    query: `mutation userCreate ($email: String!, $password: String!) {
    userCreate (email: $email, password: $password)
}`,
    variables: {"email":"Justen_Mraz59@yahoo.com","password":"OqZQ1M28_noqaES"}
});

var config = {
    method: 'post',
    url: 'http://enduring-server.herokuapp.com/v3/graphql',
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVmcmVuLmRpYmJlcnQ1OUBob3RtYWlsLmNvbSIsIl9pZCI6IjYzNzdjZWQyZTE3MDYyMmE5NzZiNTAxOSIsImlzQWN0aXZhdGVkIjp0cnVlLCJpYXQiOjE2Njg4MDA1NDYsImV4cCI6MTY2ODgwNzc0Nn0.F9EEdTjD9UrtHfR9UNBPKzsXxwIJWiSsauCguHx8J4o',
        'Content-Type': 'application/json'
    },
    data : data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
