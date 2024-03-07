import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-full">
      <div className="w-full h-full flex justify-center items-center transform xl:relative xl:-translate-x-44">
        <img
          className="w-[100px] h-[100px] transform translate-y-32 lg:w-[200px] lg:h-[200px] xl:w-screen xl:h-screen xl:object-cover xl:translate-y-0"
          width={"100"}
          height={"100"}
          src="/imgs/google-logo.png"
          alt="google-logo"
        />
      </div>
      <div className="transform translate-y-44 lg:mr-14 xl:translate-y-0 xl:-translate-x-32">
        <Form />
      </div>
    </div>
  );
}
