import styled from "styled-components";

const DefaultBox = () => {
  return (
    <DefaultBoxWrapper>
      <Box>날짜를 선택해주세요</Box>
    </DefaultBoxWrapper>
  );
};
const Box = styled.div`
  background-color: gray;
  padding: 10px;
`;
const DefaultBoxWrapper = styled.div``;

export default DefaultBox;
