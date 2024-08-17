import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
      const BASE_URL="https://bookstore-uubo.onrender.com"
  const location = useLocation();

  const navigate=useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`${BASE_URL}/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("SignUp Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        console.log(
          "Error details:",
          err.response ? err.response.data : err.message
        );
        toast.error(
          "Error: " + (err.response ? err.response.data.message : err.message)
        );
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="w-[600px]">
          <div className="modal-box ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              <div className="space-y-2 mt-4">
                <span>Name : </span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
                  {...register("fullname", { required: "This is required" })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    {errors.fullname.message}
                  </span>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <span>Email :</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
                  {...register("email", { required: "This is required" })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="space-y-2 mt-4">
                <span>Password : </span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
                  {...register("password", { required: "This is required" })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-5">
                <button className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p>
                  Have Account ?{" "}
                  <Link
                    to="/"
                    className="text-blue-500 underline text-bold cursor-pointer"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
