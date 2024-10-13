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

        <div className="d-lg-none d-flex flex-column">
            <div className="d-flex w-100 gap-5 text-right align-items-center justify-content-between">
                <div>
                    <img className='img-fluid' src="https://cbit.edu.in/wp-content/uploads/2023/06/logo-cbit-new-1-600x102.jpg" alt="" />
                </div>
                {
                    !menu ?
                        <i onClick={() => setMenu(!menu)} className="fa-solid p-3 fs-6 pe-4 fa-bars"></i> :
                        <i onClick={() => setMenu(!menu)} class="fa-solid fa-xmark p-3 pe-4 fs-6"></i>
                }
            </div>

            {
                menu &&
                <div className="d-flex p-3 w-100 flex-column text-primary">
                    <li onClick={()=>navigate('/')} ><span className='span fs-6'>Home</span></li>
                    <li>
                        <div className="d-flex fs-6 flex-column">

                            <div className="d-flex align-items-center py-2 justify-content-between w-100">
                                <span>About</span>
                                <i onClick={() => setAboutCbit(!aboutCbit)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>
                            </div>
                            {
                                aboutCbit &&

                                <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">
                                    <a className="text-light" href="https://cbit.edu.in/about/">About CBIT</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/vision-mission/">Vision & Mission</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/management/">Chairman’s Desk</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/directors-desk/">Director’s desk</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/principals-desk/">Principal’s Desk</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/affiliations/">Affiliations</a>
                                    <a className="text-light" href="https://cbit.edu.in/about/policy/">Policy</a>
                                </div>
                            }

                        </div>
                    </li>

                    
                <li>
                <div className="d-flex fs-6 flex-column">

                    <div className="d-flex align-items-center py-2 justify-content-between w-100">
                    <span>Admissions</span>
                            <i onClick={() => setAdmissions(!admissions)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>
                        </div>
                        {
                            admissions &&
                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">
                            <a className="text-light" href="https://cbit.edu.in/admissions/">Admission Procedure</a>
                            <a className="text-light" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a>
                            <a className="text-light" href="https://cbit.edu.in/admissions/fee-structure/">Fee Structure</a>
                            <a className="text-light" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a>

                            </div>


                        }   

                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">
                    <div className="d-flex align-items-center py-2 justify-content-between w-100">
                            <span>Academics</span>
                            <i onClick={() => setAcadamics(!acadamics)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>
                        </div>
                        
                        {
                            acadamics &&
                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">
                            <a className="text-light" href="https://cbit.edu.in/all-programmes/">All Programmes</a>
                            <a className="text-light" href="https://cbit.edu.in/governing-body/">Governing Body</a>
                            <a className="text-light" href="https://cbit.edu.in/academic-council/">Academic Council</a>
                            <a className="text-light" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a>
                            <a className="text-light" href="https://cbit.edu.in/research/">Research</a>

                        </div>
                        }
                    </div>
                </li>


                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">
                <span>Departments</span>
                <i onClick={() => setDepartment(!deparatment)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>
                </div>
                {
                            deparatment &&
                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">
                            <a className="text-light" href="https://cbit.edu.in/departments/civil-engineering/">Civil Engineering</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/electrical-and-electronics-engineering/">Electrical and Electronics Engineering</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/mechanical-engineering/">Mechanical Engineering</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/electronics-and-communication-engineering/">Electronics and Communication Engineering</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/computer-science-and-engineering/">Computer Science and Engineering</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/humanities-sciences/">Humanities & Sciences</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/master-of-business-administration/">Master of Business Administration</a>
                            <a className="text-light" href="https://cbit.edu.in/departments/diploma-courses/">Diploma Courses</a>

                        </div>
                }
                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">

                            <span>Placements</span>
                            <i onClick={() => setplacement(!placement)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>
                            </div>
                            {
                                placement &&
                                <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="text-light" href="https://cbit.edu.in/placements/">Introduction</a>
                            <a className="text-light" href="https://cbit.edu.in/placements/placement-process/">Placement Process</a>
                            <a className="text-light" href="https://cbit.edu.in/placements/training-programs/">Training Programs</a>
                            <a className="text-light" href="https://cbit.edu.in/placements/industry-academia-collaboration/">Industry Academia Collaboration</a>
                            <a className="text-light" href="https://cbit.edu.in/placements/placements-statistics/">Placements Statistics</a>
                            <a className="text-light" href="https://cbit.edu.in/placements/placements-contact/">Placements Contact</a>


                        </div>
                            }
                    </div>
                </li>


                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">


                            <span>Exam Cell</span>
                            <i onClick={() => setexamcell(!examcell)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>

                        </div>
                        {
                            examcell &&
                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="text-light" href="https://cbitpdtrexams.com/Login.aspx?ReturnUrl=%2f">Autonomous</a>
                            <a className="text-light" href="https://cbit.edu.in/exam-cell/">Non Autonomous
                            </a>
                        </div>
                        }
                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">
                            <span>Alumni</span>
                            <i onClick={() => setAlumni(!alumni)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>

                        </div>
                        {
                            alumni &&
                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="text-light" href="https://alumni.cbit.edu.in/?_gl=1*7a4ebs*_ga*MTkwODk2MjE5NS4xNzI3NDEyMjg4*_ga_YT0DZYY4CF*MTcyODI3NzI4Ny41LjEuMTcyODI4MTQ4NC4wLjAuMA..">Alumni Portal</a>
                            <a className="text-light" href="https://cbit.edu.in/alumni-ay-22-23/">Alumni AY-22-23</a>
                        </div>
                        }
                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">

                        <div className="d-flex align-items-center py-2 justify-content-between w-100">
                        <span>IQAC</span>
                        <i onClick={() => setIqac(!iqac)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>                        </div>
                        {
                            iqac &&

                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="text-light" href="https://cbit.edu.in/iqac/">Quality Policy</a>
                            <a className="text-light" href="https://cbit.edu.in/iqac/naac/">NAAC</a>
                            <a className="text-light" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
                        </div>
                        }
                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">
                            <span>Infrastructure</span>
                            <i onClick={() => setInfrature(!infrasture)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>

                        </div>
                        {
                            infrasture &&

                            <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="text-light" href="https://cbit.edu.in/infrastructure/building-area/">Building Area</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/lab/">Laboratory</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/library/">Library</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/auditorium/">Auditorium</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/computer-center/">Computer Center</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/health-services/">Health Services</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/sports-gymnasium/">Sports & Gymnasium</a>
                            <a className="text-light" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a>

                        </div>
                        }
                    </div>
                </li>



                <li>
                <div className="d-flex fs-6 flex-column">
                <div className="d-flex align-items-center py-2 justify-content-between w-100">
                            <span>Media</span>
                            <i onClick={() => setmedia(!media)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>

                        </div>
                        {

                            media &&
                        <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <a className="dropdown-item" href="https://cbit.edu.in/events/">Events</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/gallery/">Gallery</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/news-letter/">News Letter</a>
                            <a className="dropdown-item" href="https://www.youtube.com/@cbitpdtr">Videos</a>
                            <a className="dropdown-item" href="https://cbit.edu.in/cbit-campus-facilities/">CBIT Campus Facilities Video</a>

                        </div>

                        }
                    </div>
                </li>




                <li>
                    <div className="d-flex fs-6 flex-column">
                        <div className="d-flex align-items-center py-2 justify-content-between w-100">
                            <li onClick={()=>navigate('/download')} ><span className='span fs-6'>Student Corner</span></li>

                            <i onClick={() => setstudent(!student)} style={{ fontSize: "" }} className="fa-solid border rounded-circle border-dark p-2 text-dark fa-chevron-down ms-3"></i>

                        </div>
                        {/* {

                            student &&
                        <div style={{ zIndex: 999, background: "#6755A3" }} className="fs-6 gap-3 d-flex flex-column p-2">

                            <li onClick={()=>navigate('/download')} > <a className="dropdown-item" href="/download">Preious Year Question Papers </a></li>
                            <li onClick={()=>navigate('/download')} ><a className="dropdown-item" href="/download">Question Banks </a></li>
                            <li onClick={()=>navigate('/download')} > <a className="dropdown-item" href="/download">Study Materials </a></li>

                        </div>

                        } */}
                    </div>
                </li>



                    <li>
                        <a href="https://cbit.edu.in/contact/">Contact</a>
                    </li>


                    <span className=''>
                        <i className="fa-solid text-light fa-magnifying-glass"></i>
                    </span>

                </div>
            }
        </div>

        {/* lg screns  */}
        <div className='d-none d-lg-block'>
            <div style={{ backgroundColor: '#203764', fontSize: '9px' }} className="">
                <div style={{ backgroundColor: '#203764', fontSize: '13px' }} className="container-lg px-5 align-items-center text-light py-2 d-flex justify-content-between">
                    <div className='d-flex fw-semibold gap-3'>
                        <a href="https://alumni.cbit.edu.in/?_gl=1*1ksxh01*_ga*MTkwODk2MjE5NS4xNzI3NDEyMjg4*_ga_YT0DZYY4CF*MTcyODI3NzI4Ny41LjEuMTcyODI3OTY4NS4wLjAuMA..">Alumni</a>
                        <a href="https://cbit.edu.in/testimonials/">Testimonials</a>
                        <a href="https://cbit.edu.in/careers/">Careers</a>
                        <a href="https://cbit.edu.in/userfiles/link/AICTE-EOA-Report-ALL-2008-2025-Approvals.pdf">AICTE Approval</a>
                        <a href="https://cbit.edu.in/nirf-24/">NIRF-24</a>
                        <a href="https://cbit.edu.in/wp-content/uploads/2024/09/Women-Protection-Cell-2024.pdf">Women Protection-Cell-2024</a>
                        <a href="https://cbit.edu.in/userfiles/file/Civil-Engineering-Consultancy-Brochure.pdf">Nirman Bharathi Consultancy Center, Civil</a>
                    </div>

                    <div className='d-flex gap-3 align-items-center'>
                        <div className=''>Admission open for 2023-2024 - APPLY NOW</div>
                        <div className='d-flex fs-5 gap-3'>
                            <i className="fa-brands fa-square-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>

                </div>
            </div>



            <div className="container-xl py-2 justify-content-between d-flex align-items-center">
                <div>
                    <img src="https://cbit.edu.in/wp-content/uploads/2023/06/logo-cbit-new-1-600x102.jpg" alt="" />
                </div>

                <div className="d-flex gap-2">
                    <div style={{ width: '4px', backgroundColor: '#B6D230' }} className=' border'></div>

                    <div style={{ fontSize: '14px' }} className='d-flex text-nowrap me-3 flex-column gap-0 '>
                        <li>Recognised by UGC Under the section 2(f) & 12(B) of UGC Act, 1956</li>
                        <li> Accredited by NAAC with "A" Grade & NBA (Civil, EEE, ECE & CSE</li>
                        <li>Approved by AICTE, New Delhi, Affiliated of JNTUA, Anantapuramu</li>
                        <li>Approved by S.B.T.E.T. Andra Pradesh</li>
                    </div>
                    <div className='d-flex align-items-center'>
                        <button style={{ background: '#4175FC' }} className='text-light btn px-4 py-2  rounded-pill'>Apply Now</button>
                    </div>
                </div>
            </div>

            {/* lists  */}
            <div style={{ backgroundColor: '#6755A3', zIndex: 999 }} className=''>

                <div className="container d-flex gap-3 flex-nowrap text-nowrap py-2 align-items-center justify-content-center text-light">
                    <li onClick={()=>{navigate("/")}}><span className='span fs-6'>Home</span></li>
                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>About</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div style={{ zIndex: 999 }} className="dropdown-menu fs-6">
                                <a className="dropdown-item" href="https://cbit.edu.in/about/">About CBIT</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/vision-mission/">Vision & Mission</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/management/">Chairman’s Desk</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/directors-desk/">Director’s desk</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/principals-desk/">Principal’s Desk</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/affiliations/">Affiliations</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/about/policy/">Policy</a>
                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Admissions</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/admissions/">Admission Procedure</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/admissions/fee-structure/">Fee Structure</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a>

                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Academics</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/all-programmes/">All Programmes</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/governing-body/">Governing Body</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/academic-council/">Academic Council</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/research/">Research</a>

                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Departments</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/civil-engineering/">Civil Engineering</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/electrical-and-electronics-engineering/">Electrical and Electronics Engineering</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/mechanical-engineering/">Mechanical Engineering</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/electronics-and-communication-engineering/">Electronics and Communication Engineering</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/computer-science-and-engineering/">Computer Science and Engineering</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/humanities-sciences/">Humanities & Sciences</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/master-of-business-administration/">Master of Business Administration</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/departments/diploma-courses/">Diploma Courses</a>

                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Placements</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/">Introduction</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/placement-process/">Placement Process</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/training-programs/">Training Programs</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/industry-academia-collaboration/">Industry Academia Collaboration</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/placements-statistics/">Placements Statistics</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/placements/placements-contact/">Placements Contact</a>


                            </div>
                        </div>
                    </li>


                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Exam Cell</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbitpdtrexams.com/Login.aspx?ReturnUrl=%2f">Autonomous</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/exam-cell/">Non Autonomous
                                </a>
                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Alumni</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://alumni.cbit.edu.in/?_gl=1*7a4ebs*_ga*MTkwODk2MjE5NS4xNzI3NDEyMjg4*_ga_YT0DZYY4CF*MTcyODI3NzI4Ny41LjEuMTcyODI4MTQ4NC4wLjAuMA..">Alumni Portal</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/alumni-ay-22-23/">Alumni AY-22-23</a>
                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>IQAC</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/iqac/">Quality Policy</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/iqac/naac/">NAAC</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Infrastructure</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/building-area/">Building Area</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/lab/">Laboratory</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/library/">Library</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/auditorium/">Auditorium</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/computer-center/">Computer Center</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/health-services/">Health Services</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/sports-gymnasium/">Sports & Gymnasium</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a>

                            </div>
                        </div>
                    </li>



                    <li>
                        <div className="dropdown fs-6">
                            <div className="d-inline-flex align-items-center">
                                <span>Media</span>
                                <i style={{ fontSize: "12px" }} className="fa-solid fa-chevron-down ms-3"></i>
                            </div>
                            <div className="dropdown-menu fs-6 ">
                                <a className="dropdown-item" href="https://cbit.edu.in/events/">Events</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/gallery/">Gallery</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/news-letter/">News Letter</a>
                                <a className="dropdown-item" href="https://www.youtube.com/@cbitpdtr">Videos</a>
                                <a className="dropdown-item" href="https://cbit.edu.in/cbit-campus-facilities/">CBIT Campus Facilities Video</a>

                            </div>
                        </div>
                    </li>



    
                    <li>
                        <a href="https://cbit.edu.in/contact/">Contact</a>
                    </li>
                    <li onClick={()=>{navigate("/Download")}}><span className='span fs-6'>Student Corner</span></li>


                    <span className=''>
                        <i className="fa-solid text-light fa-magnifying-glass"></i>
                    </span>

                </div>
            </div>

        </div>

    </>)

}


export default Navbar