import styled from "styled-components";

const AddButton = () => {
  return (
    <AddButtonWrapper>
      <AddBtn>후보 추가</AddBtn>
    </AddButtonWrapper>
  );
};
const AddBtn = styled.button`
  font-size: 20px;
  font-weight: 600;
  width: 102px;
  height: 41px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
`;
const AddButtonWrapper = styled.div``;

export default AddButton;
