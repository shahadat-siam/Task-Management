// src/components/Auth/SignupForm.js
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 
import useAuth from "../Hook/useAuth";
import axios from "axios";

const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const {createUser, user, updateUserProfile} = useAuth()
  const navigate = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);

  const onSubmit = async (data) => { 
    try { 
        // create user 
        await createUser(data.email, data.password);  
        // update user profile
        await updateUserProfile(data.name, data.image)

        // save user in db
        const userInfo = { name:data?.name, email:data?.email, role:'user'}
        console.log(userInfo)
        await axios.put(`${import.meta.env.VITE_API_URL}/user`, userInfo);
        console.log(data)

        navigate('/')
        toast.success("User signed up successfully!");
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  useEffect(() => {
    if(user){
      navigate('/')
    }
  }, [navigate,user])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 animate-waves">
        <svg className="absolute bottom-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E90074" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,192C384,160,480,128,576,144C672,160,768,224,864,213.3C960,203,1056,117,1152,106.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="bg-[white] rounded-lg shadow-lg p-8 max-w-md w-full z-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-start text-gray-700">Name</label>
            <input {...register("name")} type="text" className="input input-bordered w-full mt-2 p-3 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-start text-gray-700">Email</label>
            <input {...register("email")} type="email" className="input input-bordered w-full mt-2 p-3 rounded-lg border border-gray-300" />
          </div>
          <div>
            <label className="block text-start text-gray-700">Image URL</label>
            <input {...register("image")} type="text" className="input input-bordered w-full mt-2 p-3 rounded-lg border border-gray-300" />
          </div>
          <div className="relative">
            <label className="block text-start text-gray-700">Password</label>
            <input {...register("password")} type={passwordShown ? "text" : "password"} className="input input-bordered w-full mt-2 p-3 rounded-lg border border-gray-300" />
            <button type="button" onClick={() => setPasswordShown(!passwordShown)} className="absolute right-2 bottom-4 text-gray-500">
              {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button type="submit" className="btn border-none btn-primary w-full mt-6 p-3 rounded-lg text-white bg-[#E90074] hover:bg-[#cc0061]">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
