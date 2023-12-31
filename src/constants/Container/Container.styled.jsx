import styled from "styled-components";
import { device, size } from "../deviceType/deviceType";

const Container = styled.div`
  margin: 0 auto;
  @media ${device.mobile} {
    width: ${size.mobile};
    padding: 0 24px;
  }
  @media ${device.tablet} {
    width: ${size.tablet};
    padding: 0 40px;
  }
  @media ${device.desktop} {
    width: ${size.desktop};
    padding: 0 100px;
  }
`;

export default Container;
