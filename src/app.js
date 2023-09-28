import express from "express";
//Configurando la base de datos
import mongoose from "mongoose";
import handlebars from "express-handlebars";
//websockets
import {Server} from "socket.io"
import viewsRouter from "./routes/views.router.js"
import autosRouter from "./routes/autos.router.js";

mongoose.connect("mongodb+srv://fernandoroberts185:FerChooR_R@fercluster.ukgxrav.mongodb.net/?retryWrites=true&w=majority")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const httpServer = app.listen(8080, ()=> console.log("FerChooR"));
//COnfiguramos los webSockets
const socketServer = new Server(httpServer)

//Configurando handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", "./src/views");
app.set("view engine", "handlebars");

app.use("static", express.static("./public"));
app.use(viewsRouter)
app.use("/autos", autosRouter);