const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8566;
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = path.normalize(path.join(ROOT, urlPath === "/" ? "/index.html" : urlPath));
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403); return res.end("Forbidden");
    }
    fs.stat(filePath, (err, st) => {
      if (err) { res.writeHead(404); return res.end("Not Found"); }
      if (st.isDirectory()) filePath = path.join(filePath, "index.html");
      fs.readFile(filePath, (e, data) => {
        if (e) { res.writeHead(404); return res.end("Not Found"); }
        const ext = path.extname(filePath).toLowerCase();
        // JS/CSS/HTML: no-cache so browsers always see latest during active development.
        // Other assets (images, fonts): short cache for performance.
        const noCacheTypes = new Set([".html", ".js", ".css", ".json"]);
        const cacheControl = noCacheTypes.has(ext)
          ? "no-cache, no-store, must-revalidate"
          : "public, max-age=300";
        res.writeHead(200, {
          "Content-Type": MIME[ext] || "application/octet-stream",
          "Cache-Control": cacheControl
        });
        res.end(data);
      });
    });
  } catch (e) {
    res.writeHead(500); res.end("Server Error");
  }
}).listen(PORT, HOST, () => {
  console.log(`[bio-inclusive-front] serving ${ROOT} on http://${HOST}:${PORT}`);
});
