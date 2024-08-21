import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  // const BASE_URL = "https://bookstore-uubo.onrender.com";
  // const BASE_URL="http://localhost:4001"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post(`${BASE_URL}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          closeModal();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
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
        setTimeout(() => {}, 2000);
      });
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close(); // Programmatically close the modal
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              onClick={closeModal}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>

            <div className="space-y-2 mt-4">
              <span>Email :</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-2 border rounded-md outline-none mt-3"
                {...register("email", { required: "This is required" })}
              />
              <br />
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
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mt-5">
              <button
                type="submit"
                className="bg-pink-500 px-3 py-1 rounded-md text-white hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Don't have Account?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline text-bold cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
