import styled from "styled-components";
import { useEffect } from "react";

const Selected = ({ temp }) => {
  const data = temp.map((e) => <div>{e}</div>);
  return <SelectedWrapper>{data}</SelectedWrapper>;
};

const SelectedWrapper = styled.div`
  padding: 5px;
  background-color: #c2bcbc;
  height: 500px;
`;

export default Selected;
