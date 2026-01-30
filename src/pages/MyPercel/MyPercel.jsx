import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyPercel = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [], refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data
        }
    })


    const handlePayment = async (parcel) => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            senderEmail: parcel.senderEmail,
            parcelName: parcel.parcelName
        }
        const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
        console.log(res.data);
        window.location.assign(res.data.url);

    }


    const handleDeleteButton = (id) => {
        console.log(id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);

                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel request has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        <div>
            <h2> All of my parcels :{parcels.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((parcel, index) => (<tr key={parcel._id} className="">
                                <th>{index + 1}</th>
                                <td>{parcel.parcelName}</td>
                                <td>{parcel.cost}</td>
                                <td>
                                    {
                                        parcel.paymentStatus === 'paid' ?
                                            <span className='text-green-400'>Paid</span>
                                            :
                                            <button onClick={() => handlePayment(parcel)} className='btn btn-secondary text-white btn-sm'>Pay</button>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-square">
                                        <FaMagnifyingGlass />
                                    </button>
                                    <button className="btn btn-square mx-2">
                                        <CiEdit />
                                    </button>
                                    <button onClick={() => handleDeleteButton(parcel._id)} className="btn btn-square">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPercel;