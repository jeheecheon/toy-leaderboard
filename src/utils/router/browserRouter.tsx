import LeaderboardPage from "@/components/pages/LeaderboardPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
  )
);

export default browserRouter;
