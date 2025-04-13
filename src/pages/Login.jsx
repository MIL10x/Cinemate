import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [logindata, setlogindata] = useState([]);
  const [name, setname] = useState("");
  const [UID, setUID] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  useEffect(() => {
    async function dat() {
      const data = await axios.get(`${BACKEND_URL}/userdata/cuser`);
      if (data.status === 200) {
        setlogindata(data.data);
      }
    }
    dat();
  }, []);

  console.log(logindata);
  const handlelogin = async () => {
    const namechec = logindata.some((data) => data.name == name);
    const UIDchec = logindata.some((data) => data.UID == UID);
    if (namechec && UIDchec) {
      toast.success("Login successfully");
      sessionStorage.setItem("userid", name);
      navigate("/");
    } else {
      toast.error("Your account is not found,Please register your account");
    }
    setUID("");
    setname("");
  };

  return (
    <div className="mx-auto my-20  ">
      <p className="text-5xl font-bold text-amber-500">Login</p>
      <div className="w-full border-gray-500 border-2 h-[400px] p-10 rounded-xl my-10 flex flex-col gap-2">
        <p>Name</p>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="h-10 my-5 outline-none border-b-2 border-gray-200"
          id=""
        />
        <p>UId</p>
        <input
          type="text"
          name=""
          value={UID}
          onChange={(e) => setUID(e.target.value)}
          className="h-10 my-5 outline-none border-b-2 border-gray-200"
          id=""
        />
        <button
          onClick={handlelogin}
          className="bg-blue-500 w-fit p-3 rounded-2xl text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
