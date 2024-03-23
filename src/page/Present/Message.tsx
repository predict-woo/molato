import Button from "component/Button";

type Props = {
  nextStep: () => void;
};

const Message = ({ nextStep }: Props) => {
  return (
    <>
      Message <Button text="선물 보내기" onClick={nextStep} />
    </>
  );
};

export default Message;
