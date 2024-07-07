import AddTaskForm from "../Admin/AddTask"; 
import useAuth from "../Hook/useAuth";
import axios from "axios"; 
import { useEffect, useState } from "react";
import AllTask from "../Admin/AllTask";
import LoadingSpinner from "../Shared/LoadingSpinner"; 
import UserAllTask from "../User/UserAllTask";

const HomePage = () => {
  const { user, loading } = useAuth();

  const [person, setPerson] = useState([]); 
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/user/${user?.email}`
      );
      setPerson(data);
    };
    getData();
  }, [user?.email]);

  if (loading) return <LoadingSpinner/>;

  return (
    <div>
      {person.role == "Admin" ? 
      <>
       <AddTaskForm />
       <AllTask/>
      </> : <UserAllTask/>
      }  
      
    </div>
  );
};

export default HomePage;
