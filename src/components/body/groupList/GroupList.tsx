import styled from 'styled-components';
import { GROUPLIST_WIDTH } from '../../../style/constants';
import Group from './Group';

export default function GroupList() {
  const mockGroupData = [
    {
      id: 1,
      imageUrl: 'https://',
      name: '그룹1',
      description: '그룹설명',
    },
    {
      id: 2,
      imageUrl: 'https://',
      name: '그룹2',
      description: '그룹설명',
    },
  ];

  return (
    <GroupListContainer>
      <Title>Group List</Title>
      <ul>
        {mockGroupData.map((group) => {
          const { id, name } = group;
          return <Group key={id} name={name} />;
        })}
      </ul>
      <AddGroupButton>
        <PlusIcon />
        <div className="text">Add Group</div>
      </AddGroupButton>
    </GroupListContainer>
  );
}

const GroupListContainer = styled.aside`
  width: ${GROUPLIST_WIDTH}px;
  height: 100%;
  background-color: #e9e9e9;
  z-index: -1;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  padding: 28px 28px 12px 28px;
  font-size: 21px;
  font-weight: bold;
`;

const AddGroupButton = styled.button`
  padding: 28px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e6f6ff;
  }

  .text {
    margin-left: 8px;
  }
`;

const PlusIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fdf7ef;
`;
