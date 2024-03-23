import { useState } from "react";
import Molato from "./Molato";
import ProductSection from "./Product";
import Message from "./Message";
import styled from "styled-components";
import { Product, User } from "types";
import useAxios from "hook/useAxios";
import { useNavigate } from "react-router-dom";

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

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const selectUser = (user: User) => {
    setSelectedUser(user);
  };

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const [message, setMessage] = useState<string>("");

  const axios = useAxios();
  const navigate = useNavigate();
  const sendGift = async () => {
    await axios({
      url: "/gift/send",
      method: "post",
      data: {
        letter: message,
        itemId: selectedProduct!.id,
        receiverId: selectedUser!.id,
      },
      onSuccess: (data) => {
        navigate(`/history/sent/${data.id}`);
      },
    });
  };

  return (
    <PresentContent>
      {step === Step.MOLATO && (
        <Molato
          nextStep={nextStep}
          selectedUser={selectedUser}
          select={selectUser}
        />
      )}
      {step === Step.PRODUCT && (
        <ProductSection
          nextStep={nextStep}
          selectedUser={selectedUser as User}
          selectedProduct={selectedProduct}
          select={selectProduct}
        />
      )}
      {step === Step.MESSAGE && (
        <Message
          sendGift={sendGift}
          selectedUser={selectedUser as User}
          selectedProduct={selectedProduct as Product}
          message={message}
          setMessage={setMessage}
        />
      )}
    </PresentContent>
  );
};

export default Present;
