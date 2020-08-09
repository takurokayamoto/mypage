import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")));
} else {
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// // Handle React routing, return all requests to React app

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
