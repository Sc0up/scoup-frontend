import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../style/constants';
import Logo from '../common/icons/Logo';
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
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 1px 5px 4px;
`;
