import { useParams } from "react-router-dom";
import TaskList from "@/components/TaskList";

const ProjectPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {id}</h1>
      <TaskList />
    </div>
  );
};

export default ProjectPage;