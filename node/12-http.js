const http = require("http");

const server = http.createServer((req, res) => {
	// console.log(req)
	// res.write("Welcome to home page");
	// res.end();

	if (req.url === "/") {
		res.end("Welcome to home page");
	}

	if (req.url === "/about") {
		res.end("This is about page.");
	}

	res.end(`
		<h1>Oops!</h1>
		<p>We can't seem to find the page you are looking for...</p>
		<a href='/'>Back Home</a>
	`);
});

server.listen(5000);
