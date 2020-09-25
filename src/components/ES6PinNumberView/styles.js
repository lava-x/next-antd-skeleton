import styled from "styled-components";
import css from "styled-jsx/css";

export const Wrapper = styled.div`
  background: #52c41a;
  padding: 2em;
`;

export const styles = css`
  .wrapping {
    background: red;
    padding: 2em;

    &:hover {
      background: yellow;
    }
  }
`;

export default {
  Wrapper
};
