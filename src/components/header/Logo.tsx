import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoContainer>
      {/* 일단 Icon, Text로 나눠놨지만 로고 작업 끝나면 통째로 svg로 바꿀 듯 */}
      <LogoIcon />
      <LogoText>SCOUP</LogoText>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const LogoText = styled.div``;
