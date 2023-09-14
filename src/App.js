import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import VideoPage from "./components/VideoPage";


const appRouter=createBrowserRouter([
  {
    route:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
{
  path:"/watch",
  element:<VideoPage/>

}
    ]
  }
])
function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;

/*
header
body
  sidebar
    menuitems
  maincontainer
    buttonslist
    videocontainer
      videocard  
*/
