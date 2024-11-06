import { RouterProvider } from "react-router-dom";
import { browserRouter } from "@/utils/router";

import "@/assets/styles/app.css";

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
