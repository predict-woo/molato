import Button from "component/Button";
import TextBubble from "./TextBubble";
import ProductInfo from "component/ProductInfo";
import ProductCard from "component/ProductCard";

const Home = () => {
  return (
    <div>
      <TextBubble>Hello</TextBubble>
      <Button text="Click me" onClick={() => console.log("Button clicked")} />
      <Button
        text="Disabled"
        onClick={() => console.log("Button clicked")}
        disabled
      />
      <ProductCard
        price={500}
        image="chuppacups"
        text="Product Title"
        selected={false}
      />
      <ProductInfo
        price={500}
        image="chuppacups"
        title="추파춥스"
        description="이 사탕을 받은 당사자는 오늘 더 달달한 하루를 보낼 수 있을거에요 :)"
      />
    </div>
  );
};

export default Home;
