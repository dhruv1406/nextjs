import EditVendor from '@/app/components/EditVendor'


const getVendorById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/vendors/${id}`, {
      cache: "no-store",
    });

    if(!res.ok) {
      throw new Error("failed to fetch vendors");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    
  }
}

const page = async ({ params }) => {
  const { id } = params;
  const { vendor } =  await getVendorById(id);
  const { name, bankNum, bankName, address1, address2, city, country, zip } = vendor;


  return (
    <EditVendor id={id} name={name} bankNum={bankNum} bankName={bankName} address1={address1} address2={address2} city={city} country={country} zip={zip} />
  );
}

export default page