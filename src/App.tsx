import { RouterProvider } from "react-router-dom";
import { browserRouter } from "@/utils/router";

import "@/assets/styles/app.css";
import useTemporaryRedirect from "@/hooks/useTemporaryRedirect";

function App() {
  // '/' 경로로 접속했을 때 '/leaderboard'로 리다이렉트
  useTemporaryRedirect();

  return <RouterProvider router={browserRouter} />;
}

export default App;
