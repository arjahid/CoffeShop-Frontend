import React from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffe }) => {
  const { _id, name, chef, supplier, taste, category, details, photoUrl } =
    coffe;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal   .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        console.log("delete");
        fetch(`http://localhost:5000/coffe/${_id}`,{
            method: 'DELETE',
               

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
            }
            window.location.reload();

        })
      }
    });
  };
  return (
    <div className="card shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4">
      <div className="flex justify-center w-full mb-4">
        <img
          src={photoUrl}
          alt={name}
          className="w-32 h-48 object-cover rounded-md"
        />
      </div>
      <div className="card-body text-center w-full">
        <h5 className="text-xl font-bold mb-2">{name}</h5>
        <p className="text-sm mb-1">
          <strong>Chef:</strong> {chef}
        </p>
        <p className="text-sm mb-1">
          <strong>Supplier:</strong> {supplier}
        </p>
        <p className="text-sm mb-1">
          <strong>Taste:</strong> {taste}
        </p>
        <p className="text-sm mb-1">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-sm mb-1">
          <strong>Details:</strong> {details}
        </p>
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
        <div className="join join-vertical w-full max-w-xs">
         <NavLink to={`/updatecoffe/${_id}`}> <button className="btn join-item w-full bg-blue-500 text-white hover:bg-blue-600">
            Edit
          </button></NavLink>
          <button className="btn join-item w-full bg-green-500 text-white hover:bg-green-600">
            View
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn join-item w-full bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
