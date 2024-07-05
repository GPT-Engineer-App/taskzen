import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Modal, ModalContent, ModalTrigger } from "@/components/ui/modal";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", dueDate: "2023-10-01", priority: "High" },
    { id: 2, name: "Sample Task 2", dueDate: "2023-10-02", priority: "Medium" },
  ]);
  const [newTask, setNewTask] = useState({ name: "", dueDate: "", priority: "Low" });

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({ name: "", dueDate: "", priority: "Low" });
  };

  return (
    <div>
      <ul className="mb-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Checkbox id={`task-${task.id}`} />
              <Label htmlFor={`task-${task.id}`} className="ml-2">
                {task.name}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <span>{task.dueDate}</span>
              <span>{task.priority}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="New Task"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <Calendar
          selected={newTask.dueDate}
          onSelect={(date) => setNewTask({ ...newTask, dueDate: date })}
        />
        <Select
          value={newTask.priority}
          onValueChange={(value) => setNewTask({ ...newTask, priority: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={addTask}>Add Task</Button>
      </div>
    </div>
  );
};

export default TaskList;