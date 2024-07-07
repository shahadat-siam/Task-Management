import axios from "axios";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Assuming you're using React Icons
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import LoadingSpinner from "../Shared/LoadingSpinner";
import toast from "react-hot-toast";

const UserAllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        getData();
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
    setTasks(data);
  };

  const handleMarkCompleted = async (taskId) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, { status: "completed" });
      toast.success("Task is complete");
      getData();
    } catch (err) {
      console.error("Failed to mark task as completed:", err);
    }
  };

  const handleChangeStatus = async (taskId, newStatus) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${taskId}`, { status: newStatus });
      toast.success(`Task status changed to ${newStatus}`);
      getData();
    } catch (err) {
      console.error("Failed to change task status:", err);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const taskId = result.draggableId;
      const newStatus = destination.droppableId;
      handleChangeStatus(taskId, newStatus);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  const columns = {
    pending: {
      name: "To-Do",
      items: tasks.filter((task) => task.status === "pending"),
    },
    "in-progress": {
      name: "In Progress",
      items: tasks.filter((task) => task.status === "in-progress"),
    },
    completed: {
      name: "Completed",
      items: tasks.filter((task) => task.status === "completed"),
    },
  };

  return (
    <div className="container mx-auto p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid max-w-7xl mx-auto p-3 md:grid-cols-3 grid-cols-1 gap-4">
          {Object.entries(columns).map(([columnId, column], index) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-4">{column.name}</h2>
                  {column.items.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white border-[1px] border-gray-200 p-6 mb-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                          <h2 className="text-xl text-start font-semibold mb-2">{task.taskTitle}</h2>
                          <p className="text-gray-700 text-start mb-4">{task.description}</p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-sm text-gray-500">{new Date(task.deadline).toLocaleDateString()}</span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded ${task.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {task.status}
                            </span>
                          </div>
                          <div className="flex justify-end space-x-2">
                            {task.status !== "completed" && (
                              <button
                                onClick={() => handleMarkCompleted(task._id)}
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                              >
                                Mark as Completed
                              </button>
                            )}
                            <button
                              onClick={() => handleChangeStatus(task._id, task.status === "pending" ? "in-progress" : "pending")}
                              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                              {task.status === "pending" ? "Start Task" : "Set to Pending"}
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default UserAllTask;
