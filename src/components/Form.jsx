"use client";
import { Raleway } from "next/font/google";
import { React, useMemo, useState } from "react";
import { Button, Input, Switch } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "./icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "./icons/EyeFilledIcon";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["200", "500"],
});

const initialMsg = "You will be redirected to my linkedin on submit";

function Form() {
  const [isVisible, setIsVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState(initialMsg);

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (value === "") return false;
    return validateEmail(value) ? false : true;
  }, [value]);

  const isPassword = useMemo(() => {
    return pass === "" ? true : false;
  }, [pass]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLoader = () => {
    setLoader(true);
    setMsg(initialMsg);
    setTimeout(() => {
      setLoader(false);
      window.location.href =
        "https://www.linkedin.com/in/juan-mateo-buccolini/";
    }, 3000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "" || pass === "") {
      setMsg("Information is missing");
    } else {
      handleLoader();
    }
  };

  return (
    <form
      onSubmit={"#"}
      className={`px-16 border  rounded-lg py-14  relative z-[999] shadow-2xl ${raleway.className} flex flex-col items-center backdrop-blur-md lg:w-[700px] `}
    >
      <div className="overflow-hidden">
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1200">
          <h3 className="text-blue-600 font-bold text-[30px]">SIGN IN</h3>
        </div>
      </div>
      <div className="grid grid-cols-1">
        <div className="overflow-hidden">
          <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="1200">
            <Input
              isRequired
              isInvalid={isInvalid}
              value={value}
              color={isInvalid ? "danger" : "success"}
              errorMessage={isInvalid && "Please enter a valid email"}
              onValueChange={setValue}
              size="lg"
              key="outside"
              type="email"
              label="Email"
              variant="bordered"
              labelPlacement="outside"
              description="this is a simulation"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="1200">
            <Input
              isRequired
              isInvalid={isPassword}
              value={pass}
              color={isPassword ? "danger" : "success"}
              errorMessage={isPassword && "Do not enter a real password"}
              onValueChange={setPass}
              size="lg"
              key="outside"
              label="Password"
              variant="bordered"
              labelPlacement="outside"
              description="do not enter a real pass"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
            />
          </div>
        </div>
        <div className="overflow-hidden w-full mt-4">
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="1200"
            className="w-full"
          >
            <Button
              className="border-2 bg-yellow-500 font-bold text-gray-900 w-full"
              isLoading={loader}
              onClick={handleSubmit}
            >
              {loader ? "please wait..." : "SUBMIT"}
            </Button>
          </div>
          <div className="overflow-hidden">
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1200">
              <h6 className="font-normal text-[12px] text-black pt-2">{msg}</h6>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
