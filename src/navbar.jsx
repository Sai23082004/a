import { useState } from 'preact/hooks'
import DropdownMenu from './components/DropDown'
import './cssPages/navbar.css'
import { useNavigate } from 'react-router-dom'


function Navbar() {

    const [menu, setMenu] = useState(false)
    const [aboutCbit, setAboutCbit] = useState(false)
    const [admissions,setAdmissions]= useState(false)
    const [acadamics,setAcadamics]=useState(false)
    const [deparatment,setDepartment]=useState(false)
    const [placement,setplacement]= useState(false)
    const [examcell,setexamcell]=useState(false)
    const [alumni,setAlumni]=useState(false)
    const [iqac,setIqac]=useState(false)
    const [infrasture,setInfrature]= useState(false)
    const [media,setmedia]=useState(false)
    const [student,setstudent]=useState(false)

    const navigate = useNavigate()

    return (<>

        
        {/* lg screns  */}
        <div >
            {/* lists  */}
            <div style={{ backgroundColor: '#16146E', zIndex: 999 }} className=''>

                <div className="container d-flex gap-3 flex-nowrap text-nowrap py-3 align-items-center justify-content-center text-light">
                    <li onClick={()=>{navigate("/")}}><span className='span fs-6'>Home</span></li>
                    <li>
                        <div className="dropdown fs-18">
                            <div className="d-inline-flex align-items-center">
                                <span>B.tech</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div style={{ zIndex: 999 }} className="dropdown-menu fs-6">
                                <a className="dropdown-item" href="/download">1st Year</a>
                                <a className="dropdown-item" href="">2nd Year</a>
                                <a className="dropdown-item" href="">3rd Year</a>
                                <a className="dropdown-item" href="">4th Year</a>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="dropdown fs-25">
                            <div className="d-inline-flex align-items-center fs-25">
                                <span >Certifications</span>
                            </div>
                    
                        </div>
                    </li>

                    {/* <li onClick={()=>{navigate("/Download")}}><span className='span fs-6'>Student Corner</span></li> */}

                </div>
            </div>

        </div>

    </>)

}

export default Navbar