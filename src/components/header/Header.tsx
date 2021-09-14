import styled from 'styled-components';
import Logo from './Logo';
import UserMenu from './UserMenu';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <UserMenu />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 48px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
