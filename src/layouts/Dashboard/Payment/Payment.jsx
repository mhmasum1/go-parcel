import React from 'react'
import { useParams } from 'react-router'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { isLoading, data: parcel } = useQuery({
        queryKey: ['parcels', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    })

    if (isLoading)
        return <div>
            <span className="loading loading-spinner text-error"></span>
        </div>

    return (
        <div> Please Pay for : {parcel.parcelName}</div>
    )
}

export default Payment