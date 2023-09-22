import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import viewsRouter from "./router/viewsRouter.js"

const app = express();
const httpServer = app.listen(8080,  () => console.log("Escuchando"));
const socketServer = new Server(httpServer);

app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views")
app.set("view engine", "handlebars");
app.use(express.static("./src/public"));

app.use("/", viewsRouter);

const mensajes = [];

socketServer.on("connection", (socket) => {
    console.log(`Se acaba de conectar ${socket.id}`)

    socket.on("mensaje", (data) => {
        mensajes.push(data)
        socketServer.emit("nuevo_mensaje", mensajes)
    })
})
