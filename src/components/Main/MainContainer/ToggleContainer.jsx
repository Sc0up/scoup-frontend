import styled from "styled-components";

const ToggleContainer = () => {
  return (
    <ToggleContainerWrapper>
      <ToggleButton>투표목록</ToggleButton>
    </ToggleContainerWrapper>
  );
};
const ToggleButton = styled.button`
  background-color: gray;
  padding: 10px;
`;
const ToggleContainerWrapper = styled.div`
  /* float: right; */
  padding: 10px;
  /* display: block; */
`;

export default ToggleContainer;
