import styled from 'styled-components';

export default function Group({ name }: { name: string }) {
  return (
    <GroupContainer>
      <div>{name}</div>
      <GroupManagementButton />
    </GroupContainer>
  );
}

const GroupContainer = styled.li`
  padding: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }
`;

const GroupManagementButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
