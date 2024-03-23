import Button from "component/Button";

type Props = {
  nextStep: () => void;
};

const Product = ({ nextStep }: Props) => {
  return (
    <>
      Product
      <Button text="편지 쓰기" onClick={nextStep} />
    </>
  );
};

export default Product;
