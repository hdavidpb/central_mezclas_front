import styled from "styled-components";

interface IProps {
  background?: string;
}

export const OrdersContainerContainer = styled.div`
  width: 100%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 2/6;
  padding-right: 6rem;
  padding-top: 4rem;
  gap: 1.5rem;

  @media (max-width: 1375px) {
    padding-right: 1rem;
  }
`;

export const TablesContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

export const TableBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TitleTable = styled.h5`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  background: #3f4a59;
  color: #ffffff;
  padding: 5px;
  border-radius: 6px;
`;

export const TableListItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 3px;
`;
export const SubTitleDescItem = styled.h5`
  margin-bottom: 0;
  font-size: 15px;
  color: #3f4a59;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TableListContainer = styled.div`
  width: 100%;
  height: 59vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  gap: 1px;
  box-shadow: 0 0 2px 2px #0000002e;

  &::-webkit-scrollbar {
    display: none;
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e2e2e2;
    border-radius: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(211, 208, 208, 0.8);
    border-radius: 10px;
    margin-block: 10px;
  }
  @media (max-width: 1365px) {
    height: 55vh;
  }
`;

export const DescItem = styled.p`
  margin-bottom: 0;
  width: 100%;
  height: 100%;
  background: ${({ background }: IProps) => background};
  color: ${({ background }: IProps) =>
    background === "#3F4A59" ? "#ffffff" : "#3F4A59"};
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  padding: 10px;
  font-size: 14px;
`;

export const GenerateOrderContainer = styled.div`
  width: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    border: none;
    border-radius: 6px;
    box-shadow: 0px 3px 6px #00000029;
    background: #86e97f;
    font-size: 16px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #3f4a59;
    font-weight: 600;
    cursor: pointer;
  }
`;
