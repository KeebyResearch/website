import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="flex flex-col items-center p-16 w-screen min-h-screen bg-keeby-orange">
      <img
        className="w-full max-w-[300px]"
        src="/assets/keeby-square.png"
        alt="KEEBY Logo"
      />
      <h1 className="font-keeby-default text-6xl text-center">KEEBY RESEARCH</h1>
      <h2 className="font-keeby-default text-xl text-center bg-keeby-black py-2 px-4 rounded-xl">
	  Protocols, Networks, and Products
      </h2>
      <section
        className={`w-full flex flex-col items-center ${roboto.className}`}
      >
        <p className="mt-8 mb-4 w-full text-base text-center">
          For a <strong className="underline">service quote</strong>,{" "}
          <strong className="underline">acquisition LOI</strong>, and{" "}
          <strong className="underline">inquiries</strong> send us an email:
        </p>
        <a
          href="https://twitter.com/keebytech"
          className={`hover:underline text-center bg-keeby-black p-4 rounded-xl ${roboto.className}`}
        >
          {`engineering` + `@` + `keeby` + `.` + `xyz`}
        </a>
        <span className="flex justify-center items-center my-4">
          <p className="w-full text-base text-center">
            Alternatively, you can follow us on:&nbsp;
          </p>
          <a
            href="https://twitter.com/keebytech"
            className={`hover:underline text-center ${roboto.className}`}
          >
            Twitter
          </a>
        </span>
      </section>
    </main>
  );
}
