"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EditVendor = ({id, name, bankName, bankNum, address1, address2, city, country, zip}) => {

    const [newName, setNewName] = useState(name);
    const [newBankNum, setNewBankNum] = useState(bankNum);
    const [newBankName, setNewBankName] = useState(bankName);
    const [newAddress1, setNewAddress1] = useState(address1);
    const [newAddress2, setNewAddress2] = useState(address2);
    const [newCity, setNewCity] = useState(city);
    const [newCountry, setNewCountry] = useState(country);
    const [newZip, setNewZip] = useState(zip);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/vendors/${id}`, {
                method: "PUT",
                headers: {
                    "content-type" : "application/json",
                },
                body: JSON.stringify({newName, newBankNum, newBankName, newAddress1, newAddress2, newCity, newCountry, newZip}),
            });
            if(!res.ok){
                throw new Error("failed to update.");
            }

            router.refresh();
            router.push("/homepage");


        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <h1 className='text-center py-2'>Update Vendor Details</h1>
    <div className='container d-flex justify-content-center align-items-center'>
     <form onSubmit={handleSubmit}
     className="row g-3 border border-dark p-2">
            <div className="col-md-6">
                <label for="inputName" className="form-label">Name</label>
                <input 
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                type="text" className="form-control" id="inputName"/>
            </div>
            <div className="col-md-6">
                <label for="inputBankNum" className="form-label">Bank A/c Number</label>
                <input 
                onChange={(e) => setNewBankNum(e.target.value)}
                value={newBankNum}
                type="number" className="form-control" id="inputBankNum"/>
            </div>
            <div className="col-md-6">
                <label for="inputBankName" className="form-label">Bank Name</label>
                <input 
                onChange={(e) => setNewBankName(e.target.value)}
                value={newBankName}
                type="text" className="form-control" id="inputBankName"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input 
                onChange={(e) => setNewAddress1(e.target.value)}
                value={newAddress1}
                type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Address 2</label>
                <input 
                onChange={(e) => setNewAddress2(e.target.value)}
                value={newAddress2}
                type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
            </div>
            <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input
                onChange={(e) => setNewCity(e.target.value)}
                value={newCity}
                type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">Country</label>
                <select 
                onChange={(e) => setNewCountry(e.target.value)}
                value={newCountry}
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
                onChange={(e) => setNewZip(e.target.value)}
                value={newZip}
                type="number" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success">Update</button>
            </div>
        </form>
        </div>
    </>
  )
}

export default EditVendor