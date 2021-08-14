import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleInput></TitleInput>
      <CloseButton>닫기</CloseButton>
    </HeaderWrapper>
  );
};
const TitleInput = styled.input``;
const CloseButton = styled.div``;
const HeaderWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export default Header;
