import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SchedulePage from "./pages/SchedulePage";

const Root = () => {
  return (
    <RootWrapper>
      <RootComponent />
    </RootWrapper>
  );
};
// component
const RootComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/schedulePage" component={SchedulePage} exact />
      </Switch>
    </Router>
  );
};

const RootWrapper = styled.div``;

export default Root;
