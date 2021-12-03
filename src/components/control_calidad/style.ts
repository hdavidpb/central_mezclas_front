import styled from "styled-components";

interface IProps {
  grid?: boolean;
}

export const ControlContainerContainer = styled.div`
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

export const FilterContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  gap: 15px;
  border: 1px solid var(--unnamed-color-9a9ff9);
  background: #f3f4ff 0% 0% no-repeat padding-box;
  padding: 8px;
  border-radius: 6px;
`;

export const FieldContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  & h6 {
    font-size: 12px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  background: #ffffff;
  order: 1px solid #cccccc;
  border-radius: 4px;

  & input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding-left: 35px;
    border: solid 1px #80808078;
    transition: all 100ms;

    &:focus {
      /* box-shadow: 0 0 2px 2px #2684ff; */

      border-color: #2684ff;
      box-shadow: 0 0 0 1px #2684ff;
    }
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 8px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`;

export const DownloadBtnContainer = styled.button`
  border: none;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: #4e5c6e 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;

  & p {
    margin-bottom: 0;
    height: 100%;
    text-align: left;

    color: #ffffff;
    font-size: 14px;
    background: transparent;
  }
`;

export const TablesContainer = styled.div`
  width: 100%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const TitleHeaderContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

export const TitleDesc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  grid-column: ${({ grid }: IProps) => (grid ? "5/8" : "0")};
  background: #cdcffe 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  word-wrap: break-word;
  font-size: 15px;
  padding: 3px;
`;

export const TableListContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  overflow-y: scroll;
  padding: 3px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: #cdcffe;
  }
`;
export const TableListItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 6px;
`;

export const ListDesc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  grid-column: ${({ grid }: IProps) => (grid ? "5/8" : "0")};

  word-wrap: break-word;
  font-size: 15px;
  padding: 7px;
`;

export const ListDosisContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;

  grid-column: 5/8;
  gap: 10px;
  padding: 7px;
`;

export const ListDosisDesc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & h6 {
    margin-bottom: 0;
    font-size: 15px;
    color: #9a9ff9;
    word-wrap: break-word;
  }
  & p {
    margin-bottom: 0;
    font-size: 15px;

    word-wrap: break-word;
  }
`;
