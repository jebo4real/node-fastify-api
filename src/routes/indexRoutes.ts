import { FastifyInstance } from "fastify";
import indexController from "../controller/indexController";


export default async function indexRoutes(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", indexController)
}