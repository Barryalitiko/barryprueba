const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Crear una instancia del cliente
const client = new Client({
    authStrategy: new LocalAuth() // Guarda la sesión localmente
});

// Generar el código QR
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Cuando el cliente esté listo
client.on('ready', () => {
    console.log('Bot está listo!');
});

// Manejar mensajes
client.on('message', message => {
    if (message.body === '!ping') {
        message.reply('Pong!');
    }
});

// Iniciar el cliente
client.initialize();
