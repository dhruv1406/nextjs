import { RiDeleteBin6Line } from 'react-icons/ri'
import { useRouter } from 'next/navigation';


const DeleteBtn = ({ id }) => {

  const router = useRouter();

  const removeVendor = async () => {
    const confirmed = confirm('Are You Sure?');

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/vendors?id=${id}`,{
        method: "DELETE", 
      });
      if(res.ok){
        router.refresh();
      }
    }
  };



  return (
    <button 
    onClick={ removeVendor }
    className='btn text-danger'><RiDeleteBin6Line/></button>
  )
}

export default DeleteBtn