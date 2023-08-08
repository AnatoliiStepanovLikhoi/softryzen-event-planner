import { ThreeCircles } from "react-loader-spinner";
import { Box } from "./Loader.styled";

import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const Loader = () => {
  return createPortal(
    <Box>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating-loader"
        outerCircleColor="#7B61FF"
        innerCircleColor="#ACA7C3"
        middleCircleColor="#6243FF"
      />
    </Box>,
    modalRoot
  );
};

export default Loader;
