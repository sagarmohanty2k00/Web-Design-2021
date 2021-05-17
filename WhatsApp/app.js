messageDB = {
    "Suru" : [
        {
            "sent":"Hey",
            "type": "txt-message",
        },

        {
            "recieved":"Hey",
            "type": "txt-message",
        },

        {
            "sent":"./suru.jpg",
            "type": "PNG",
            "size": "2MB",
        },
    ],

    "Animesh" : [
        {
            "sent":"Abey",
            "type": "txt-message",
        },

        {
            "recieved":"Han kaha",
            "type": "txt-message",
        },

        {
            "sent":"Dekh be suru kan deichi 😂😂",
            "type": "txt-message",
        },

        {
            "sent":"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png",
            "type": "PNG",
            "size": "2MB",
        },

        {
            "recieved":"Are bhai bhai bhai 😂😂😂",
            "type": "txt-message",
        },
    ]
}

function chatoptions() {
    document.getElementById("chatoptions").classList.toggle('d-none');
    if(!document.getElementById("profileoptions").classList.contains('d-none')) {
        document.getElementById("profileoptions").classList.add('d-none');
    }
}

function profileoptions() {
    if(!document.getElementById("chatoptions").classList.contains('d-none')) {
        document.getElementById("chatoptions").classList.add('d-none')
    }
    document.getElementById("profileoptions").classList.toggle('d-none');
}

function handleMessage() {
    const message = document.getElementById('messageInput');

    document.getElementById('messages').innerHTML += `<div class="sent txt-message">
    <p>${message.value}</p>
    </div>`
    message.focus();
    message.innerHTML = ""
    message.value = ""
}

function emoKeyBoard() {
    document.getElementById('messages').classList.toggle('full-message-height')
    document.getElementById('messages').classList.toggle('after-emo-height');
    document.getElementById('emojiKeyboard').classList.toggle('d-none');
}

function addemoji(emo) {
    document.getElementById('messageInput').value += document.getElementById(emo).innerHTML;
}

function setChat(name) {
}