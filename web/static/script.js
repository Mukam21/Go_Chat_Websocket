const chat = document.getElementById('chat');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
// Укажите адрес вашего WebSocket-сервера
const socket = new WebSocket('ws://API_addres:8080/ws');
socket.onopen = function() {
    console.log('Соединение установлено');
};
socket.onmessage = function(event) {
    const message = document.createElement('div');
    message.textContent = event.data;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight; // Прокрутка вниз
};
socket.onclose = function() {
    console.log('Соединение закрыто');
};
sendButton.onclick = function() {
    const message = messageInput.value;
    if (message) {
        const msgObject = {
            address: "API_addres", // Здесь можно динамически получить IP адрес
            message: message,
            time: new Date().toLocaleTimeString()
        };
        socket.send(JSON.stringify(msgObject)); // Отправляем JSON
        messageInput.value = ''; // Очистка поля ввода
    }
};
messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendButton.click(); // Отправка сообщения по нажатию Enter
    }
});