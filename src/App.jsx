import Header from "./components/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
      <Header />
      <Body />
      </Provider>
    </div>
  );
}

export default App;
