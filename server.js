import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

app.listen(PORT, function () {
    console.log("it's running on " + PORT);
});
