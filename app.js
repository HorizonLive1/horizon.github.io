document.getElementById('follow').addEventListener('click', function() {
    alert('You have followed the streamer.');
});

document.getElementById('subscribe').addEventListener('click', function() {
    alert('You have subscribed to the streamer.');
});

document.getElementById('report').addEventListener('click', function() {
    prompt('Please describe the issue with this streamer:');
});

document.getElementById('sendMessage').addEventListener('click', function() {
    var message = document.getElementById('messageInput').value;
    var messageList = document.getElementById('messages');
    var newMessage = document.createElement('li');
    newMessage.textContent = message;
    messageList.appendChild(newMessage);
    document.getElementById('messageInput').value = '';
});
