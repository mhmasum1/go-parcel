import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const SendParcel = () => {
    const { register, handleSubmit, control } = useForm();


    const axiosSequre = useAxiosSecure();
    const { user } = useAuth();

    const centersArea = useLoaderData();
    const duplicateRegions = centersArea.map(d => (d.region))
    const region = [...new Set(duplicateRegions)]
    const senderRegion = useWatch({ control, name: "senderRegion" });
    const receiverRegion = useWatch({ control, name: "receiverRegion" });

    const districtByRegion = region => {
        const regionDistrict = centersArea.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district)
        return district;
    }

    const handleSendParcel = (data) => {

        const isDocument = data.percelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0;
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        }
        else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            }
            else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;

                cost = minCharge + extraCharge;
            }
        }

        // console.log('cost', cost);
        data.cost = cost;

        Swal.fire({
            title: "Agree with the Cost?",
            text: `You will be charged ${cost} taka`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I agree"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSequre.post('/parcels', data)
                    .then(res => {
                        console.log(res.data);
                    })


                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });

    }

    return (
        <div className='p-5'>
            <h3 className="font-bold text-3xl text-center my-5">Send A Parcel</h3>
            <h5 className='font-bold text-2xl'>Enter your parcel details</h5>

            <form onSubmit={handleSubmit(handleSendParcel)}>
                {/* documents */}
                <div className='my-3'>
                    <label className='label mx-5'>
                        <input type="radio" {...register("percelType")} value="document" className="radio " defaultChecked />
                        Document
                    </label>
                    <label className='label'>
                        <input type="radio" {...register("percelType")} value="non-document" className="radio" />
                        Non-Document
                    </label>
                </div>

                {/* Parcel Name and weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div >
                        <fieldset className="fieldset ">
                            <label className="label">Parcel Name</label>
                            <input {...register("parcelName")} type="text" className="input w-full" placeholder="Parcel Name" />
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <label className="label">Parcel Weight(kg)</label>
                            <input {...register("parcelWeight")} type="number" className="input w-full" placeholder="Parcel Weight" />
                        </fieldset>
                    </div>


                </div>
                <div className='border text-gray-500 my-10 '>
                </div>
                {/* Deatils */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* sender */}
                    <div>
                        <fieldset className="fieldset">
                            <h3 className='font-bold text-2xl'>Sender Details</h3>
                            <label className="label">Sender Email</label>
                            <input {...register("senderEmail")} defaultValue={user.email} type="text" className="input w-full" placeholder="Sender Email" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Sender Name</label>
                            <input {...register("senderName")} defaultValue={user.displayName} type="text" className="input w-full" placeholder="Sender Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Address</label>
                            <input {...register("senderAddress")} type="text" className="input w-full" placeholder="Address" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Sender Phone No</label>
                            <input {...register("senderPhoneNumber")} type="text" className="input w-full" placeholder="Sender Phone No" />
                        </fieldset>

                        {/* Sender region */}
                        <fieldset className="fieldset">
                            <label className="label">Sender region</label>
                            <select {...register("senderRegion")} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {
                                    region.map((d, i) => <option value={d} key={i}>{d}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* Sender District */}

                        <fieldset className="fieldset">
                            <label className="label">Sender District</label>
                            <select {...register("senderDistrict")} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtByRegion(senderRegion).map((d, i) => <option value={d} key={i}>{d}</option>)
                                }


                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Pickup Instruction</label>
                            <input {...register("pickUpInstruction")} type="text" className="input w-full h-20" placeholder="Pickup Instruction" />
                        </fieldset>
                    </div>
                    {/* receiver */}
                    <div>
                        <fieldset className="fieldset">
                            <h3 className='font-bold text-2xl'>Receiver Details</h3>
                            <label className="label">Receiver Email</label>
                            <input {...register("receiverEmail")} type="text" className="input w-full" placeholder="Receiver Email" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Receiver Name</label>
                            <input {...register("receiverName")} type="text" className="input w-full" placeholder="Receiver Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Receiver Address</label>
                            <input {...register("receiverAddress")} type="text" className="input w-full" placeholder=" ReceiverAddress" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Receiver Phone No</label>
                            <input {...register("receiverPhoneNumber")} type="text" className="input w-full" placeholder="Receiver Phone No" />
                        </fieldset>

                        {/* Reciver region */}
                        <fieldset className="fieldset">
                            <label className="label">Reciver region</label>
                            <select {...register("receiverRegion")} defaultValue="Pick a region" className="select">
                                <option disabled={true}>Pick a region</option>
                                {
                                    region.map((d, i) => <option value={d} key={i}>{d}</option>)
                                }
                            </select>
                        </fieldset>

                        {/* Reciver District */}

                        <fieldset className="fieldset">
                            <label className="label">Reciver District</label>
                            <select {...register("receiverDistrict")} defaultValue="Pick a district" className="select">
                                <option disabled={true}>Pick a District</option>
                                {
                                    districtByRegion(receiverRegion).map((d, i) => <option value={d} key={i}>{d}</option>)
                                }


                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <label className="label">Delivery Instruction</label>
                            <input {...register("deliveryInstruction")} type="text" className="input w-full h-20" placeholder="Delivery Instruction" />
                        </fieldset>
                    </div>
                </div>
                <p className='my-5'>* PickUp Time <strong>4pm-7pm</strong> Approx.</p>
                <div className='text-center'>
                    <input className='btn btn-primary mt-10' type="submit" value="Proceed to Confirm Booking" />
                </div>
            </form>

        </div>
    );
};

export default SendParcel;