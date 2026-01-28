import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const MyPercel = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: parcels = [] } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user.email}`);
            return res.data
        }
    })

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
                                <td>Edit</td>
                                <td>Actions</td>
                            </tr>))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPercel;