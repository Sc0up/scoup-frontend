import styled from 'styled-components';

export default function UserMenu() {
  return (
    <UserMenuContainer>
      <Menu />
      <Menu />
      <Menu />
    </UserMenuContainer>
  );
}

const UserMenuContainer = styled.ul`
  all: unset;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Menu = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;
