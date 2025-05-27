
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox']
    }
});

client.on('qr', qr => {
    console.log('📱 סרוק את הקוד כדי להתחבר לוואטסאפ:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ הבוט מחובר לוואטסאפ ומוכן!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'היי' || message.body === 'שלום') {
        message.reply('שלום וברוכים הבאים לטיולי רייזרים 🚜\nנא לבחור:\n1. טיולי רייזרים\n2. איזיריידר\n3. קולנוע נייד');
    }
});

client.initialize();
