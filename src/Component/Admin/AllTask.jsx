import axios from "axios";
import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log(tasks)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
         getData()
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

  if (loading) {
    return <div>Loading...</div>;
  } 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return ( 
  <div className="">
        <h1 className="text-4xl font-semibold">Task List</h1>
      <div className="grid p-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-4 mb-12">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} ></TaskCard>
        ))}
      </div>
  </div>
  );
};

export default AllTask;
