import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const { register, handleSubmit, watch } = useForm();

    const centersArea = useLoaderData();
    const duplicateRegions = centersArea.map(d => (d.region))
    const region = [...new Set(duplicateRegions)]
    const senderRegion = watch("senderRegion");

    const districtByRegion = region => {
        const regionDistrict = centersArea.filter(c => c.region === region);
        const district = regionDistrict.map(d => d.district)
        return district;
    }

    const handleFormInfo = (data) => {
        console.log(data);
    }

    return (
        <div className='p-5'>
            <h3 className="font-bold text-3xl text-center my-5">Send A Parcel</h3>
            <h5 className='font-bold text-2xl'>Enter your parcel details</h5>

            <form onSubmit={handleSubmit(handleFormInfo)}>
                {/* documents */}
                <div className='my-3'>
                    <label className='label mx-5'>
                        <input type="radio" {...register("document")} value="document" className="radio " defaultChecked />
                        Document
                    </label>
                    <label className='label'>
                        <input type="radio" {...register("document")} value="non-document" className="radio" />
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
                            <label className="label">Sender Name</label>
                            <input {...register("senderName")} type="text" className="input w-full" placeholder="Sender Name" />
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
                            <h3 className='font-bold text-2xl'>   Receiver Details</h3>
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
                        <fieldset className="fieldset">
                            <label className="label">Receiver District</label>
                            <input {...register("receiverDistrict")} type="text" className="input w-full" placeholder="Receiver District" />
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