import TextAtom from "@/components/atoms/TextAtom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TemporaryRedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/leaderboard");
  }, []);

  return (
    <TextAtom size="large" color="red">
      Redirecting...
    </TextAtom>
  );
}

export default TemporaryRedirectPage;
