import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCar = () => {
    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const logo = form.logo.value;
        const name = form.name.value;
        const carImage = form.carImage.value;
        const miles = form.miles.value;
        const charge = form.charge.value;
        const location = form.location.value;
        const renterCharge = form.renterCharge.value;
        const gst = form.gst.value;

        // Check if all fields are filled
        if (!logo || !name || !carImage || !miles || !charge || !location || !renterCharge || !gst) {
            alert("Please fill in all fields");
            return;
        }

        const newCar = { logo, name, carImage, miles, charge, location, renterCharge, gst };
        console.log(newCar);

        // send data to the sever

        fetch('http://localhost:5000/car',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCar)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);

            if(data.insertedId){
                navigate('/');
                Swal.fire({
                    title: "Data send to MongoDB Server",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            }
        })

      
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Car</h2>
            <form onSubmit={handlesubmit} className="space-y-6">
                <div className="form-group">
                    <label htmlFor="logo" className="block text-lg font-medium text-gray-700">Logo URL</label>
                    <input
                        type="text"
                        id="logo"
                        name="logo"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700">Car Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="carImage" className="block text-lg font-medium text-gray-700">Car Image URL</label>
                    <input
                        type="text"
                        id="carImage"
                        name="carImage"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="miles" className="block text-lg font-medium text-gray-700">Miles Driven</label>
                    <input
                        type="text"
                        id="miles"
                        name="miles"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="charge" className="block text-lg font-medium text-gray-700">Car Charge</label>
                    <input
                        type="text"
                        id="charge"
                        name="charge"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location" className="block text-lg font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="renterCharge" className="block text-lg font-medium text-gray-700">Renter Charge</label>
                    <input
                        type="text"
                        id="renterCharge"
                        name="renterCharge"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="gst" className="block text-lg font-medium text-gray-700">GST</label>
                    <input
                        type="text"
                        id="gst"
                        name="gst"
                        className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 mt-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddCar;
