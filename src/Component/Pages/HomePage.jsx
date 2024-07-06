import DemoTaskSite from "../Task/DemoTask"; 
import TaskList from "../Task/UserDemo";

 
const HomePage = () => {
    return (
        <div> 
             <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
             <DemoTaskSite/>
             <TaskList/>
        </div>
    );
};

export default HomePage;