import Form from "@/components/Form";


export default function Home() {
  return (
    <main className="flex justify-center items-center relative h-screen px-2">
      <img
        className="absolute object-cover top-0 left-0 z-[999] w-screen h-screen"
        width={"100"}
        height={"100"}
        src="/imgs/google-logo.png"
        alt="google-logo"
      />

      <div className="container px-8 hidden">
        <img className="" src="/imgs/google-word.png" alt="google-word" />
      </div>

        <Form />

    </main>
  );
}
