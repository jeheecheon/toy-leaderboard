import LeaderboardPage from "@/components/pages/LeaderboardPage";
import TemporaryRedirectPage from "@/components/pages/TemporaryRedirectPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TemporaryRedirectPage />}></Route>,
      <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
    </>
  )
);

export default browserRouter;
