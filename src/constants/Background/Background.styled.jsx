import styled from "styled-components";
import BackgroundImage from "../../assets/background.png";
import { device } from "../../constants/deviceType/deviceType";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;

  @media ${device.tablet} {
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
export default Background;
