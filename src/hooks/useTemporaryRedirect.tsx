import { useEffect } from "react";

function useTemporaryRedirect() {
  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/leaderboard";
    }
  }, []);

  return null;
}

export default useTemporaryRedirect;
