baseUrl = 'https://deshi-imdchatapp.herokuapp.com/'

fetch(baseUrl + 'api/v1/messages', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
}).then(res => {
    return res.json();
}).then(json => {
    json.data.messages.forEach(message => {
        console.log(message)
        let newMessage = document.createElement("div")
        newMessage.className = "messageBox"
        let username = document.createElement("p")
        username.innerHTML = message.username + ":"
        username.className = "messageUsername"
        let text = document.createElement("p")
        text.innerHTML = message.message
        text.className = "messageText"

        newMessage.appendChild(username)
        newMessage.appendChild(text)


        document.querySelector(".messages").appendChild(newMessage);
    })
})

    .catch((error) => {
        console.log(error.message);
    });