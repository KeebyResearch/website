export default function Home() {
  return (
    <main className="flex items-center justify-center p-16 w-screen h-screen bg-keeby-orange flex-col">
      <img
        className="w-full max-w-[300px]"
        src="/assets/keeby-square.png"
        alt="KEEBY Logo"
      />
      <h1 className="font-keeby-default text-6xl">KEEBY</h1>
      <h2 className="font-keeby-default text-xl mb-8">Web3 Middleware</h2>
      <a
        href="https://twitter.com/keebytech"
        className="font-keeby-default text-2xl hover:underline text-center bg-black p-4 rounded-xl"
      >
        For <strong className="text-4xl">inquiries</strong>, send us a{" "}
        <strong className="text-4xl">DM</strong> on{" "}
        <strong className="text-4xl">X</strong>
      </a>
    </main>
  );
}
