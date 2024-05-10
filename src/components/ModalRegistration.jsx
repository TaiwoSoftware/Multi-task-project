"use client";
import { useEffect, useState } from "react";
import CustomHr from "./CustomHr";
import FormStep from "./FormStep";
import GrayFormStep from "./GrayFormStep";
import HeadingPersonal from "./HeadingPersonal";
import Range from "./Range";
import Inputs from "./Auth/Inputs";
import Link from "next/link";
import EmptyErrorInput from "./EmptyErrorInput";
export default function ModalRegistration() {
  const [isClicked, setIsClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputEmail, setEmailValue] = useState("");
  const [inputTelephone, setInputTelephone] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    localStorage.setItem("name", inputValue);
    localStorage.setItem("email", inputEmail);
    localStorage.setItem("tel", inputTelephone);
    // localStorage.setItem("link", 'github.com/' + linkValue);
    const changedFirstLetter = linkValue.slice(0, 1);
    const remainingWords = linkValue.slice(1, linkValue.length);
    const theMainLetterChanged = changedFirstLetter.toLowerCase();
    const joinedWords = theMainLetterChanged + remainingWords;
    localStorage.setItem("link", "github.com/" + joinedWords);
    setIsEmpty(!isEmpty);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleTelephone = (e) => {
    setInputTelephone(e.target.value);
  };
  const handleLink = (e) => {
    setLinkValue(e.target.value);
  };
  useEffect(() => {
    localStorage.clear()
  }, [])
  return (
    <>
      {isClicked === true ? (
        <>
          {inputValue === "" ||
          inputEmail === "" ||
          inputTelephone === "" ||
          (linkValue === "") === true ? (
            <>
              {isEmpty && (
                <EmptyErrorInput message="Fill up the necessary field" />
              )}
              <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
                <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
                  <FormStep stage="1" />
                  <Range />
                  <GrayFormStep stageTwo="2" />
                  <Range />
                  <GrayFormStep stageTwo="3" />
                  <Range />
                  <GrayFormStep stageTwo="4" />
                </div>
                <CustomHr />
                <HeadingPersonal
                  modalHeaderOne="Personal Information"
                  modalParagraph="Please provide your personal details so we can get to know you better."
                />
                <form>
                  <div className="flex gap-10 mt-6 ml-6">
                    <div>
                      <Inputs
                        labelFor="userName"
                        labelText="Full Name"
                        type="text"
                        value={inputValue}
                        innerText="John Doe"
                        handleChange={handleChange}
                      />
                    </div>
                    <div>
                      <Inputs
                        labelFor="Email"
                        value={inputEmail}
                        labelText="Email Address"
                        type="email"
                        innerText="johndoe24@gmail.com"
                        handleChange={handleEmail}
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 mt-6 ml-6">
                    <div>
                      <Inputs
                        labelFor="tel"
                        labelText="Phone Number"
                        type="tel"
                        value={inputTelephone}
                        innerText="+91-1234-0890"
                        handleChange={handleTelephone}
                      />
                    </div>
                    <div className="mb-4">
                      <Inputs
                        labelFor="link"
                        labelText="Portfolio/GitHub Link"
                        type="text"
                        value={linkValue}
                        innerText="github.com/taiwosoftware"
                        handleChange={handleLink}
                      />
                    </div>
                  </div>
                  <CustomHr />
                  <Link href="">
                    <button
                      onClick={handleClick}
                      className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
                      type="submit"
                    >
                      Next Step
                    </button>
                  </Link>
                </form>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
                <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
                  <FormStep stage="1" />
                  <Range />
                  <GrayFormStep stageTwo="2" />
                  <Range />
                  <GrayFormStep stageTwo="3" />
                  <Range />
                  <GrayFormStep stageTwo="4" />
                </div>
                <CustomHr />
                <HeadingPersonal
                  modalHeaderOne="Personal Information"
                  modalParagraph="Please provide your personal details so we can get to know you better."
                />
                <form>
                  <div className="flex gap-10 mt-6 ml-6">
                    <div>
                      <Inputs
                        labelFor="userName"
                        labelText="Full Name"
                        type="text"
                        value={inputValue}
                        innerText="John Doe"
                        handleChange={handleChange}
                      />
                    </div>
                    <div>
                      <Inputs
                        labelFor="Email"
                        value={inputEmail}
                        labelText="Email Address"
                        type="email"
                        innerText="johndoe24@gmail.com"
                        handleChange={handleEmail}
                      />
                    </div>
                  </div>
                  <div className="flex gap-10 mt-6 ml-6">
                    <div>
                      <Inputs
                        labelFor="tel"
                        labelText="Phone Number"
                        type="tel"
                        value={inputTelephone}
                        innerText="+91-1234-0890"
                        handleChange={handleTelephone}
                      />
                    </div>
                    <div className="mb-4">
                      <Inputs
                        labelFor="link"
                        labelText="Portfolio/GitHub Link"
                        type="text"
                        value={linkValue}
                        innerText="github.com/taiwosoftware"
                        handleChange={handleLink}
                      />
                    </div>
                  </div>
                  <CustomHr />
                  <Link href="/two">
                    <button
                      onClick={handleClick}
                      className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
                      type="submit"
                    >
                      Next Step
                    </button>
                  </Link>
                </form>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
            <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
              <FormStep stage="1" />
              <Range />
              <GrayFormStep stageTwo="2" />
              <Range />
              <GrayFormStep stageTwo="3" />
              <Range />
              <GrayFormStep stageTwo="4" />
            </div>
            <CustomHr />
            <HeadingPersonal
              modalHeaderOne="Personal Information"
              modalParagraph="Please provide your personal details so we can get to know you better."
            />
            <form>
              <div className="flex gap-10 mt-6 ml-6">
                <div>
                  <Inputs
                    labelFor="userName"
                    labelText="Full Name"
                    type="text"
                    value={inputValue}
                    innerText="John Doe"
                    handleChange={handleChange}
                  />
                </div>
                <div>
                  <Inputs
                    labelFor="Email"
                    value={inputEmail}
                    labelText="Email Address"
                    type="email"
                    innerText="johndoe24@gmail.com"
                    handleChange={handleEmail}
                  />
                </div>
              </div>
              <div className="flex gap-10 mt-6 ml-6">
                <div>
                  <Inputs
                    labelFor="tel"
                    labelText="Phone Number"
                    type="tel"
                    value={inputTelephone}
                    innerText="+91-1234-0890"
                    handleChange={handleTelephone}
                  />
                </div>
                <div className="mb-4">
                  <Inputs
                    labelFor="link"
                    labelText="Portfolio/GitHub Link"
                    type="text"
                    value={linkValue}
                    innerText="github.com/taiwosoftware"
                    handleChange={handleLink}
                  />
                </div>
              </div>
              <CustomHr />
              <button
                onClick={handleClick}
                className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
                type="submit"
              >
                Next Step
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
