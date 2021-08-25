import styled from 'styled-components';

export default function Day({ key, day }: { key: number; day: string }) {
  return <DayWrapper>{day}</DayWrapper>;
}

const DayWrapper = styled.div`
  box-sizing: border-box;
  width: 150px;
  height: 100px;
  border: 1px solid black;
`;
