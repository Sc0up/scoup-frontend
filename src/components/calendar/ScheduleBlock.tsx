import styled from 'styled-components';

export default function ScheduleBlock() {
  return <ScheduleBlockContainer>테스트용</ScheduleBlockContainer>;
}

const ScheduleBlockContainer = styled.div`
  width: 100%;
  background-color: lightskyblue;
  padding: ${({ theme }) => theme.padding.S};
  font-size: ${({ theme }) => theme.fontSize.XS};
`;
