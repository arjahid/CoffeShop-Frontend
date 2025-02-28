import React from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffe = () => {

    const handelSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photoUrl = e.target.photoUrl.value;
        const data = {
            name,
            chef,
            supplier,
            taste,
            category,
            details,
            photoUrl
        }
        console.log(data);
        fetch('http://localhost:5000/coffe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Hurray!",
                    text: "Coffee added successfully",
                    icon: "success",
                    draggable: true
                  });
                form.reset();
            }
        })
    }
    return (
        <div className="container mx-auto p-4 max-w-4xl mt-20"> 
            <form onSubmit={handelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">Name
                        <input type="text" name="name" placeholder="Name" className="input-field w-full" />
                    </label>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">Chef
                        <input type="text" name="chef" placeholder="Chef" className="input-field w-full" />
                    </label>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">supplier
                        <input type="text" name="supplier" placeholder="Supplier" className="input-field w-full" />
                    </label>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">taste
                        <input type="text" name="taste" placeholder="Taste" className="input-field w-full" />
                    </label>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">category
                        <input type="text" name="category" placeholder="Category" className="input-field w-full" />
                    </label>
                </div>
                <div>
                    <label className="input input-bordered flex items-center gap-2 w-full">details
                        <input type="text" name="details" placeholder="Details" className="input-field w-full" />
                    </label>
                </div>
                <div className="md:col-span-2">
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" name="photoUrl" placeholder="Photo URL" className="input-field w-full" />
                    </label>
                </div>
                <div className="md:col-span-2 flex justify-center">
                    <button type="submit" className="btn btn-primary w-full md:w-1/2">Add Coffee</button>
                </div>
            </form>
            <NavLink className='flex items-center justify-center ' to='/'><button className="btn btn-secondary mt-4">Back</button></NavLink>
        </div>
    );
};

export default AddCoffe;
