import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard";
import { Hono } from "hono";

const app = new Hono();

figlet.parseFont("Standard", standard);
const body = figlet.textSync("Bun!");

app.get("/", (c) => c.text(body));

export default app;
