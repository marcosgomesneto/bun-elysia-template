import { Elysia } from "elysia";

const routesV1 = new Elysia()
    .get("/api/v1/webhook", webhookController);

export type RoutesV1 = typeof routesV1 

export {
    routesV1
}
