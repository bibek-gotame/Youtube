// import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/Body/MainContainer/MainContainer";
import Watch from "./components/WatchPage/Watch";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/",
         element: <MainContainer />
         },
        {
          path: "watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>

        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
