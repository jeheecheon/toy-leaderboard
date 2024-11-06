import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  
  const browserRouter = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<>blank space</>}></Route>)
  );
  
  export default browserRouter;
  