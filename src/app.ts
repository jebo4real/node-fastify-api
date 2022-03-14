import fastify from "fastify";
import router from "./routes/router";
import db from "./config/db";

const server = fastify({
  // Logger only for production
  logger: process.env.NODE_ENV === "development",
});

// Middleware: Router
server.register(router);

try{

}catch(error){
  
}
db.once("open", () => {
  console.log("mongo connected")
});



export default server;
