import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import SpinButton from "./components/SpinButton";

const App = () => {
  const history = useHistory();

  return (
    <>
      <button type="button" onClick={() => history.push("/")}>
        홈
      </button>
      <button type="button" onClick={() => history.push("/carousel")}>
        캐로셀
      </button>
      <button type="button" onClick={() => history.push("/nav")}>
        네비게이션
      </button>
      <Switch>
        <Route exact path="/carousel" component={Carousel} />
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/" component={SpinButton} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
