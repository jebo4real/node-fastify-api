import { FastifyRequest, FastifyReply } from "fastify";

export default async function userController(_request: FastifyRequest,
  reply: FastifyReply) {
    reply.send({
      balance: "$3,277.32",
      picture: "http://placehold.it/32x32",
      age: 30,
      name: "Leonor Cross",
      gender: "female",
      company: "GRONK",
      email: "leonorcross@gronk.com",
    });
}
