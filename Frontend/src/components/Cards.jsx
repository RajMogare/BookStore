import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="my-10 p-3 ">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body  dark:bg-slate-900 dark:text-white dark:border">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline p-3">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500  hover:text-white duration-200 p-3 cursor-pointer">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
