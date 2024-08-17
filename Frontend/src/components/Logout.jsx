import React from "react";
import { useAuth } from "../context/AuthProvide";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout Successfully");
      closeModal();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error:", error.message);
      setTimeout(()=>{},1000)
    }
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.close(); // Programmatically close the modal
    }
  };
  return (
    <>
      <button
        className="px-3 py-2 bg-red-500 rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
