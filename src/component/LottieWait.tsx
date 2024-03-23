import animationData from "assets/lotties/wait.json";
import Lottie from "react-lottie";

type Props = {
  loop?: boolean;
};

const LottieWait = ({ loop = false }: Props) => {
  const defaultOptions = {
    loop,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={30} width={60} />;
};

export default LottieWait;
