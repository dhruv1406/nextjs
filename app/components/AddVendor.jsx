"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const AddVendor = () => {

const [name ,setName] = useState("");
const [bankNum, setBankNum] = useState("");
const [bankName, setBankName] = useState("");
const [address1, setAddress1] = useState("");
const [address2, setAddress2] = useState("");
const [city, setCity] = useState("");
const [country, setCountry] = useState("");
const [zip, setZip] = useState("");

const router = useRouter();

const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !bankNum || !bankName || !address1 || !city || !country || !zip){
        alert("Fields are required to fill.");
        return;
    }

    try {
      const res =  await fetch('http://localhost:3000/api/vendors', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name,bankNum,bankName,address1,address2,city,country,zip}),
        });

        if(res.ok){
            router.push("/homepage");
        }else{
            throw new Error('failed to create  a vendor');
        }


    } catch (error) {
        console.log(error);
    }
}

  return (
    <>
    <h1 className='text-center py-2'>Add Vendor Details</h1>
    <div className='container d-flex justify-content-center align-items-center'>
     <form onSubmit={handleSubmit} className="row g-3 border border-dark p-2">
            <div className="col-md-6">
                <label for="inputName" className="form-label">Name</label>
                <input onChange={(e) => setName(e.target.value)}
                value ={name} 
                type="text" className="form-control" id="inputName"/>
            </div>
            <div className="col-md-6">
                <label for="inputBankNum" className="form-label">Bank A/c Number</label>
                <input 
                onChange={(e) => setBankNum(e.target.value)}
                value ={bankNum}
                type="number" className="form-control" id="inputBankNum"/>
            </div>
            <div className="col-md-6">
                <label for="inputBankName" className="form-label">Bank Name</label>
                <input 
                onChange={(e) => setBankName(e.target.value)}
                value={bankName}
                type="text" className="form-control" id="inputBankName"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input 
                onChange={(e) => setAddress1(e.target.value)}
                value ={address1}
                type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address 2</label>
                <input 
                onChange={(e) => setAddress2(e.target.value)}
                value ={address2}
                type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input 
                onChange={(e) => setCity(e.target.value)}
                value ={city}
                type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">Country</label>
                <select 
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option value="india">India</option>
                <option value="australia">Australia</option>
                <option value="sriLanka">Sri Lanka</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input 
                onChange={(e) => setZip(e.target.value)}
                value ={zip}
                type="number" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add Vendor</button>
                <Link href="/homepage" className='p-3'> 
                    <button type="submit" className='btn btn-success'>Cancel</button>
                </Link>
            </div>
        </form>
        </div>
    </>
  )
}

export default AddVendor