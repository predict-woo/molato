import { useState } from "react";
import Molato from "./Molato";
import Product from "./Product";
import Message from "./Message";
import styled from "styled-components";

enum Step {
  MOLATO,
  PRODUCT,
  MESSAGE,
}

const PresentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
  height: 100%;
`;

const Present = () => {
  const [step, setStep] = useState<Step>(Step.MOLATO);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const sendPresent = () => {
    console.log("선물을 보냈습니다.");
  };

  return (
    <PresentContent>
      {step === Step.MOLATO && <Molato nextStep={nextStep} />}
      {step === Step.PRODUCT && <Product nextStep={nextStep} />}
      {step === Step.MESSAGE && <Message nextStep={sendPresent} />}
    </PresentContent>
  );
};

export default Present;
