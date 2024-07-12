const http = require('node:http');

const sendHtmlResponse = (response, html) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
};

const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === '/') {
        const html = `
            <html>
                <head><title>Enter Message</title></head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>`;
        sendHtmlResponse(response, html);
    } else {
        const html = `
            <html>
                <head><title>My First Page</title></head>
                <body><h1>Hello from my Node.js Server!</h1></body>
            </html>`;
        sendHtmlResponse(response, html);
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});