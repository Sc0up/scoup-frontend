import styled from 'styled-components';

export default function Day({ key, day }: { key: number; day: string }) {
  return (
    <DayWrapper>
      <DayNumber>{day}</DayNumber>
    </DayWrapper>
  );
}

const DayWrapper = styled.div`
  box-sizing: border-box;
  width: calc(100% / 7);
  height: 100%;
  border: 1px solid ${({ theme }) => theme.color.mono.gray020};
`;

const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-top: 4px;
  margin-left: 4px;
  font-size: ${({ theme }) => theme.fontSize.S};
  border-radius: 50%;
  /* 추후 오늘 날짜인지 확인해서 배경 칠해줘야 함 */
  /* background-color: ${({ theme }) => theme.color.primary.p020}; */
  color: ${({ theme }) => theme.color.mono.gray050};
`;
