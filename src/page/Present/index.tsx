import { useState } from "react";
import Molato from "./Molato";
import Product from "./Product";
import Message from "./Message";

enum Step {
  MOLATO,
  PRODUCT,
  MESSAGE,
}

const Present = () => {
  const [step, setStep] = useState<Step>(Step.MOLATO);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const sendPresent = () => {
    console.log("선물을 보냈습니다.");
  };

  if (step === Step.MOLATO) {
    return <Molato nextStep={nextStep} />;
  } else if (step === Step.PRODUCT) {
    return <Product nextStep={nextStep} />;
  } else if (step === Step.MESSAGE) {
    return <Message nextStep={sendPresent} />;
  } else {
    return <></>;
  }
};

export default Present;
