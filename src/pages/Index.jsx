import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Your Todo App</h1>
      <Button onClick={() => navigate("/inbox")}>Go to Inbox</Button>
    </div>
  );
};

export default Index;