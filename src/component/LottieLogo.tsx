import animationData from "assets/lotties/logo.json";
import Lottie from "react-lottie";

type Props = {
  size: number;
  loop?: boolean;
};

const LottieLogo = ({ size, loop = false }: Props) => {
  const defaultOptions = {
    loop,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={size} width={size} />;
};

export default LottieLogo;
