import { Readable, Writable } from "node:stream";

const someReadableStream = new Readable();
someReadableStream.push("hello world");
someReadableStream.push("hello world");
someReadableStream.push("hello world");
someReadableStream.push(null);

const writableStream = new Writable({
  write(chunk, _, callback) {
    console.log(chunk.toString());
    callback();
  },
});

someReadableStream.on("data", (chunk) => writableStream.write(chunk));
someReadableStream.on("end", () => writableStream.end());

// # Uncomment below and comment above two lines as both are equivalent
// someReadableStream.pipe(writableStream);

writableStream.on("finish", () => console.log("End of writableStream"));
