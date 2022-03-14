import { FastifyInstance } from "fastify";
import userController from "../controller/userController";

export default async function userRoutes(fastify: FastifyInstance) {
  // GET /
  fastify.get("/", userController)
}