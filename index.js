require("./config.js");
const pkg = require("./package.json");
const CFonts = require("cfonts");

// Mendefinisikan.
global.config.pkg = pkg;

// Memulai.
console.log(`[${pkg.name}] Starting...`);

// Tampilkan judul menggunakan CFonts.
CFonts.say(pkg.name, {
    font: "chrome",
    align: "center",
    gradient: ["red", "magenta"]
});

// Menampilkan informasi paket.
const authorName = pkg.author.name || pkg.author;
CFonts.say(
    `'${pkg.description}'\n` +
    `Oleh ${authorName}`, {
        font: "console",
        align: "center",
        gradient: ["red", "magenta"]
    }
);

// Impor dan jalankan modul utama.
require("./main.js");
