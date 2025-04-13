import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  const [logindata, setlogindata] = useState([]);
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [UID, setUID] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    async function dat() {
      const data = await axios.get(`${BACKEND_URL}/userdata/cuser`);
      if (data.status === 200) {
        setlogindata(data.data);
      }
    }
    dat();
  }, []);

  const handlesubmit = async () => {
    const namechec = logindata.some((data) => data.name == name);
    const UIDchec = logindata.some((data) => data.UID == UID);
    if (!namechec && !UIDchec) {
      toast.success("Accout created successfully");
      const data = await axios.post(`${BACKEND_URL}/userdata/cuser`, {
        name,
        UID,
      });
      navigate("/");
      console.log(data.status);
    } else {
      toast.error("Your account is already regitered");
    }
    setUID(" ");
    setmail(" ");
    setname(" ");
  };
  return (
    <div className="mx-auto my-20  ">
      <p className="text-5xl font-bold text-amber-500">Register</p>
      <div className="w-full border-gray-500 border-2 h-[500px] p-10 rounded-xl my-10 flex flex-col gap-2">
        <p>Name</p>
        <input
          type="text"
          name=""
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="h-10 my-5 outline-none border-b-2 border-gray-200"
          id=""
        />
        <p>Mail</p>
        <input
          type="text"
          name=""
          value={email}
          onChange={(e) => setmail(e.target.value)}
          className="h-10 my-5 outline-none border-b-2 border-gray-200"
          id=""
        />
        <p>Create your UId</p>
        <input
          type="text"
          name=""
          value={UID}
          onChange={(e) => setUID(e.target.value)}
          className="h-10 my-5 outline-none border-b-2 border-gray-200"
          id=""
        />

        <button
          onClick={handlesubmit}
          className="bg-blue-500 w-fit p-3 rounded-2xl text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
