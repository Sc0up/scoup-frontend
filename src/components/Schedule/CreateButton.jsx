import { useContext } from "react";
import styled from "styled-components";
import { DateContext } from "../../pages/SchedulePage";

const CreateButton = () => {
  const { store } = useContext(DateContext);
  const { tempData, titleData, dateData } = store;
  const [temp] = tempData;
  const [title] = titleData;
  const [date] = dateData;
  const checkPage = () => {
    let newTemp = [...temp];
    if (title === "") {
      alert("제목을 입력해주세요");
    } else if (date === null) {
      alert("날짜를 선택해주세요");
    } else if (newTemp.length === 0) {
      alert("일정을 추가해주세요");
    } else {
      console.log("성공");
      return true;
    }
    console.log(title && date && temp);
    return false;
  };

  return (
    <CreateButtonWrapper>
      <CreateBtn temp={temp} date={date} title={title} onClick={checkPage}>
        일정생성 완료
      </CreateBtn>
    </CreateButtonWrapper>
  );
};
const CreateBtn = styled.button`
  color: ${({ temp, date, title }) => {
    let newArr = [...temp];
    console.log(title);
    if (newArr.length !== 0 && date !== null && title !== "") {
      return "black";
    } else return "gray";
  }};
  font-size: 30px;
  padding: 10px;
  /* background-color: rebeccapurple; */
`;

const CreateButtonWrapper = styled.div``;
export default CreateButton;
