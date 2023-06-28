import Link from "next/link"
import Google_btn from "./Google_btn"
import { AiOutlineUserAdd } from 'react-icons/ai'

const   Navbar = () => {
    // const { data: session, status } = useSession();

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">NextJs App</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/addVendor">Add Vendor<AiOutlineUserAdd className="mb-1" size={15}/></Link>
              </li>
          </ul>
          <Google_btn/> 
        </div>
    </nav>
    </>
  )
}

export default Navbar