import { FastifyInstance } from "fastify";
import indexRoutes from "./indexRoutes";
import userRoutes from "./userRoutes";

export default async function router(fastify: FastifyInstance) {
  fastify.register(indexRoutes, { prefix: "/" });
  fastify.register(userRoutes, { prefix: "/api/v1/user" });
}