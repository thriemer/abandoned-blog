const mj = require("mathjax");
const http = require("http");
const host = "localhost";
const port = 4567;

const requestListener = async function (req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string
  });
  req.on("end", async () => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var content = JSON.stringify(await tex2svg(body));
    res.end(content);
  });
};

let MathJax;

async function initializeMathJax() {
  if (!MathJax) {
    MathJax = await mj.init({
      loader: { load: ["input/tex", "output/svg"] },
    });
  }
}

async function tex2svg(tex) {
  await initializeMathJax(); // Ensure MathJax is initialized
  console.log("Received Tex: " + tex);
  without_doller = tex.replaceAll("$", "").trim();
  try {
    const svg = MathJax.tex2svg(without_doller, { display: true });
    console.log(without_doller);
    const svgString = MathJax.startup.adaptor.innerHTML(svg);
    return svgString;
  } catch (err) {
    console.error(err.message);
    throw err; // Rethrow the error if needed
  }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
