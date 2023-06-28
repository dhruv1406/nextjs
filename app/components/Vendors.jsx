import Link from 'next/link'
import { AiFillEdit } from 'react-icons/ai'
import DeleteBtn from './DeleteBtn';


const getVendors = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/vendors', {
      cache: "no-store",
    });

    if(!res.ok){
      throw new Error('failed to fetch vendors');
    }

    return res.json();

  } catch (error) {
    console.log("error loading vendors")
  }
}

const Vendors = async () => {
  const { vendors } = await getVendors();
  return (
    <>
    {vendors.map(v => (
        <div className="container mt-3 ">
            <div className="border border-dark d-flex justify-content-between p-2">
                <div className=''>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Name:</b> {v.name}</li>
                    <li className='list-group-item'><b>Bank A/c Number:</b> {v.bankNum}</li>
                    <li className='list-group-item'><b>Bank Name:</b> {v.bankName}</li>
                    <li className='list-group-item'><b>Address 1:</b> {v.address1}</li>
                    <li className='list-group-item'><b>Address 2:</b> {v.address2}</li>
                    <li className='list-group-item'><b>City:</b> {v.city}</li>
                    <li className='list-group-item'><b>Country:</b> {v.country}</li>
                    <li className='list-group-item'><b>Zip:</b> {v.zip}</li>
                  </ul>
                </div>
              
                <div>
                  <Link href={`/editVendor/${v._id}`}>
                      <button className="btn mr-2 text-success"><AiFillEdit/></button>
                  </Link>
                  <DeleteBtn id={v._id}/>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Vendors