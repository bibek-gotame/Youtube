import Header from "./components/Header";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[

    ]
  }])
  return (
    <div>
      <Provider store={store}>
      <Header />
      <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
