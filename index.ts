import figlet from "figlet";
import { Hono } from "hono";

const app = new Hono();

const body = figlet.textSync("Bun!");

app.get("/", (c) => c.text(body));

export default app;
