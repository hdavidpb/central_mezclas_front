import styled from "styled-components";

interface IProps {
  heightWidth?: string;
}

export const CentralContainer = styled.div`
  margin: auto;
  width: 100%;
  height: 96vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.692);
`;
export const SmallIconCaontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IProps) => (props.heightWidth ? props.heightWidth : "20px")};
  height: ${(props: IProps) =>
    props.heightWidth ? props.heightWidth : "20px"};
  font-weight: 200;
  color: #4e5c6e;
`;

export const Navbar = styled.div`
  width: 90%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 3px 6px #00000029;

  & h6 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
      text-decoration: none;
      color: #3f4a59;
    }
  }

  & h6 {
    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
      border-right: 0;
    }
    /* display: flex;
    justify-content: center;
    align-items: center;
    word-wrap: break-word; */
    width: 100%;
    height: 100%;
    text-align: center;
    margin-bottom: 0;
    font-size: #3f4a59;
    font-size: 14px;
    font-weight: 200;
    transition: all 0.4s;
    cursor: pointer;

    border-right: solid 1px #80808047;
    &:hover {
      background: #cdcffe;
    }
  }
`;
