function useTemporaryRedirect() {
  if (window.location.pathname === "/") {
    window.location.href = "/leaderboard";
  }

  return null;
}

export default useTemporaryRedirect;
