import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; 
import axios from "axios";
import useAuth from "../Hook/useAuth";

const AddTaskForm = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.task_title.value;
    const assignedTo = form.assignedTo.value;
    const status = form.status.value;
    const deadline = startDate;
    const description = form.description.value;

    const taskData = {
      taskTitle,
      assignedTo,
      status,
      deadline,
      description,
    };
    console.log(taskData)

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/task`,
        taskData
      );
      toast.success("Task added successfully");
      // navigate("/tasks");
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error(`Failed to add task: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center  items-center  my-12">
      <section className="p-2 md:p-6 border-[1px] border-gray-200 md:max-w-[600px] max-w-[400px] w-full mx-auto bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-gray-700 capitalize">
          Add a Task
        </h2>

        <form className="" onSubmit={handleFormSubmit}>
          <div className=" flex flex-col gap-4 mt-4">
            <div className="md:flex justify-between md:space-y-0 space-y-4 gap-4 items-center text-start">
              <div>
                <label className="text-gray-700" htmlFor="task_title">
                  Task Title
                </label>
                <input
                  id="task_title"
                  name="task_title"
                  type="text"
                  className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  required
                />
              </div>

              <div>
                <label className="text-gray-700" htmlFor="assignedTo">
                  Assigned To
                </label>
                <input
                  id="assignedTo"
                  name="assignedTo"
                  type="text"
                  className=" w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                  required
                />
              </div>
            </div>

            <div className="md:flex justify-between md:space-y-0 space-y-4 items-center text-start">
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Deadline</label>
                <DatePicker
                  className="border p-2 rounded-md"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-700" htmlFor="status">
                  Status
                </label>
                <select
                  name="status"
                  id="status"
                  className="border  p-2 rounded-md"
                  required
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Complete</option>
                </select>
              </div>
            </div>

            <div className="flex text-start flex-col gap-2">
              <label className="text-gray-700" htmlFor="description">
                Description
              </label>
              <textarea
                className="  w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                name="description"
                id="description"
                required
              ></textarea>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-[#1A1A1A] transition-colors duration-300 transhtmlForm bg-[#55AD9B] rounded-md  focus:outline-none focus:bg-gray-600"
              >
                Add Task
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTaskForm;
