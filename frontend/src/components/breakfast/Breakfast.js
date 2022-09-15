import React, { useNavigate } from 'react';
import { breakfast_array } from "./breakfast_data.jsx";
import "./Breakfast.css";

const Breakfast = () => {
  const navigate = useNavigate();

  const handleOrderNow = ()=>{
    navigate("/order")
  };
  
  return (
    // <div className="row">
    //   {
    //     breakfast_array.map((index)=>{
    //       return (
    //         <div className="card col-sm-4">
    //           <img
    //             className="card-img-top"
    //             src={index.img}
    //             alt="Pic"
    //           />
    //           <div className="card-body">
    //             <h5 className="card-title">{index.title}</h5>
    //             <p className="card-text">{index.detail}</p>
    //             <button className="btn btn-primary">order now</button>
    //             <button className="btn btn-primary" hidden>
    //               Click To Edit
    //             </button>
    //           </div>
    //         </div>
    //       );
    //       })
    //   }

    // </div>
    <>
      <ul class="cards">
{       
 breakfast_array.map((index)=>{
  return (
    <li className="cards__item">
      <div class="card">
        <img src={index.img} alt="pics" />
        <div class="card__content">
          <div class="card__title">{index.title}</div>
          <p class="card__text">
            {index.detail}
          </p>
          <button class="btn btn--block card__btn" onClick={handleOrderNow} >Order Now</button>
        </div>
      </div>
    </li>
  );
 })}
      </ul>
    </>
  );
}

export default Breakfast