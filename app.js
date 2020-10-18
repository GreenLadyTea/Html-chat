const URL = 'http://localhost:3000';

class App{
    constructor(){
        this.button = document.getElementById('button');
        this.nick = document.getElementById('nick');
        this.message = document.getElementById('message');
        this.messages = document.getElementById('messages');
        this.element = document.getElementById('element');

        this.postMessage = this.postMessage.bind(this);
        this.getMessages = this.getMessages.bind(this);
        this.drawMessages = this.drawMessages.bind(this);

        setInterval(this.getMessages, 1000);

        this.button.addEventListener('click', this.postMessage);

        this.serverMessages = [];
    }

    postMessage()
    {
        if(this.nick.value === '' || this.message.value === '') {
            alert('Поле не может быть пустым!');
            return;
        }
        let xhr = new XMLHttpRequest();

        xhr.open('POST', URL);
        xhr.send(JSON.stringify(
            {
                nick: this.nick.value,
                message: this.message.value,
                element: this.element.value
            }));

        xhr.onload = () => {
            if (xhr.status !== 200) {
                console.error('Ошибка!');
            } else {
                this.drawMessages(xhr.response);
            }
        };

        xhr.onerror = function() {
            console.log('Запрос не удался');
        }
    }

    getMessages()
    {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send();
        xhr.onload = () =>
        {
            if (xhr.status != 200)
            {
                console.error('Ошибка!');
            } else {
                    this.drawMessages(xhr.response);
            }
        };
    }

    drawMessages(response){
        const newServerMessages = JSON.parse(response);
        const existingIds = this.serverMessages.map(message => message.id);

        for (let serverMessage of newServerMessages)
        {
            if (!existingIds.includes(serverMessage.id)) {
                this.messages.innerHTML += `<ul><b>${serverMessage.nick}:</b> ${serverMessage.message}$<br/>${serverMessage.element}</ul>`;
            }
        }
        this.serverMessages = newServerMessages;
    }
}
