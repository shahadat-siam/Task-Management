import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import UpdateTask from "./UpdateModal";

const TaskCard = ({ task }) => {
  const { _id, taskTitle, assignedTo, status, deadline, description } = task;
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
 
  
  // Handle delete task functionality
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/task/${_id}`
      );
      toast.success("Task deleted successfully");
      console.log(data);
      // Optionally: Handle state update or rerender parent component
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Render the task card with edit and delete buttons
  return (
    <div className="">
      <div className="max-w-400px border-[1px] border-gray-200 w-full rounded-lg overflow-hidden shadow-md bg-white">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {taskTitle}
            </h3>
            <p className="text-sm text-gray-700">
              <strong>Assigned to:</strong> {assignedTo}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Status:</strong> {status}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Deadline:</strong>{" "}
              {new Date(deadline).toLocaleDateString()}
            </p>
            <p className="text-sm text-start text-gray-700">
              <strong>Description:</strong> {description}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsOpen(true)}
              className="text-gray-600 hover:text-gray-900"
               
            >
              <FaEdit />
            </button>
            <button
              className="text-red-600 hover:text-red-900"
              onClick={handleDelete}
            >
              <FaTrashAlt />
            </button>
          </div>
          <UpdateTask
          isOpen={isOpen}
          closeModal={closeModal}
          task={task}
        />
        </div>
      </div> 
    </div>
  );
};

export default TaskCard;
