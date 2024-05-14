import { Readable } from "node:stream";

const readableStream = new Readable();

for (let i = 0; i < 10; i++) {
  readableStream.push("Lorem Ipsum\n");
}
readableStream.push(null);

readableStream.pipe(process.stdout);

readableStream.on("end", () => console.log("\nReadable stream ended"));
