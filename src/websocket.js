function handleWebSocketConnection(ws) {
    console.log('Client connected');

    // Send a random number between 10 and 100 every second
    const interval = setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 91) + 10;
        ws.send(JSON.stringify({ number: randomNumber }));
    }, 1000);

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(interval);
    });
}

module.exports = { handleWebSocketConnection };
