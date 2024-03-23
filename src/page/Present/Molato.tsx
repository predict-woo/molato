import Button from "component/Button";

type Props = {
  nextStep: () => void;
};

const Molato = ({ nextStep }: Props) => {
  return (
    <>
      Molato
      <Button text="선물 고르기" onClick={nextStep} />
    </>
  );
};

export default Molato;
