import { useEffect, useRef, useState } from "preact/hooks"
import Navbar from "./navbar"
import './cssPages/home.css'
import vision from '../public/images/vision.png'
import saikiran2 from '../public/images/saikiran2.jpg'
import hod from '../public/images/hod.jpg'
import sai from '../public/images/sai.jpg'
import abba from '../public/images/abba.jpg'
import bavi from '../public/images/bavi.jpg'
import gs from '../public/images/gs.jpg'
import tony from '../public/images/tony.jpg'
import moma from '../public/images/moma.jpg'
import bavi1 from '../public/images/bavi1.jpg'
import sai1 from '../public/images/sai1.jpg'





export const Home = () => {
    const [showList, setShowList] = useState(false)
    const [url, setUrls] = useState("https://cbit.edu.in/wp-content/uploads/2023/06/cbit-1.jpg")
    const images = ["https://cbit.edu.in/wp-content/uploads/2023/06/cbit-1.jpg", "https://cbit.edu.in/wp-content/uploads/2023/06/CBIT-Ground.jpg", "https://cbit.edu.in/wp-content/uploads/2023/06/CBIT-slide.jpg"]
    let count = 1
    const [pg, setPg] = useState(false)
    const [dc, setDc] = useState(false)
    const scrollRef = useRef(null);

    useEffect(() => {
        setInterval(() => {
            setUrls(images[count]);
            count += 1

            if (count > 2) {
                count = 0;
            }
        }, 10000);

    }, [count])


    return (
        <div className="" ref={scrollRef} style={{ overflowX: "hidden" }}>

            <div className="position-relative w-100">
                <Navbar />
                {/* imge */}

                <div
                    style={{ height: "42rem", zIndex: -1 }}
                    className="w-100 overflow-hidden position-absolute overflow-hidden position-relative mt-2"
                >
                    {/* Blue tint overlay */}
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 255, 0.2)', // Blue tint with 50% transparency
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 0, // Place the tint behind the text but above the image
                        }}
                    ></div>

                    <div style={{ zIndex: -1 }}>
                        <img
                            src={url}
                            style={{ objectFit: 'cover', width: '100%', height: '45rem', zIndex: '-1' }}
                            className=""
                        />
                    </div>

                    {/* Text content */}
                    <div className="position-absolute top-50 text-light text-center w-100" style={{ zIndex: 1 }}>
                        <h1>Your Future Secure With Us</h1>
                        <h1 style={{ fontSize: '50px' }}>Chaitanya Bharathi Institute of Technology</h1>
                    </div>
                </div>

                <div className="" style={{ height: "42rem" }}></div>
            </div>

            {/* Marquee tag  */}
            <div className="py-2 px-lg-5" style={{ backgroundColor: '#F3F5F5' }}>
                <div style={{ fontSize: '14px' }} className="container px-lg-5 d-flex align-items-center">
                    <button style={{ backgroundColor: '#1E73BE', color: 'white', border: 'none', width: 'auto', textWrap: 'nowrap', fontSize: '14px' }}>Latest Updates</button>
                    <marquee behavior="" direction="" >
                        <div className="d-flex gap-5">
                            <a style={{ color: 'blue', fontSize: '14px' }} href="https://cbit.edu.in/first-year-student-induction-programme-2023/">FIRST YEAR STUDENT INDUCTION PROGRAMME – 2024</a>
                            <a style={{ color: 'blue', fontSize: '14px' }} href="https://cbit.edu.in/engineers-day-celebration-event/"> Excellent Placements in CBIT – 2024 [Accenture-24 & TCS-01 (9Lac Package)</a>
                            <a style={{ color: 'blue', fontSize: '14px' }} href="https://cbit.edu.in/eligibility-criteria-for-admission-to-b-tech-courses/">Eligibility Criteria for Admission to B.Tech Courses,—B.Tech 1-2 sem & MBA 1-2 sem Result coming soon..</a>
                        </div>
                    </marquee>
                </div>
            </div>

            {/* NOTICE BOARD SECTOIN  */}
            <div style={{ overflow: 'hidden', background: '#FFF4F4' }} className="py-5" >
                <div className="container-md py-5">
                    <div style={{ overflow: 'hidden', background: '#FFF4F4' }} className="row d-flex justify-content-between px-2">

                        <div className="col-md-6 d-flex align-items-center  pe-0 ">
                            <div className="row pe-0 py-5">

                                <a href="https://cbit.edu.in/admissions/courses-offered/" style={{ minWidth: '200px' }} className="col-md-4 col-12 text-dark">
                                    <div style={{ backgroundColor: '#D1DAA2', objectFit: 'cover' }} className=" p-0 gap-0 coursesOfferd align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">
                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/book.png" alt="" />
                                            <h6 className="text-nowrap">COURSES OFFERED</h6>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://cbit.edu.in/campus-life/" style={{ minWidth: '200px' }} className="col-md-4 py-2 col-12 text-dark">
                                    <div style={{ backgroundColor: '#D5E7E1' }} className=" p-0 gap-0 ourCampus align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">
                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/campus.png" alt="" />
                                            <h6 className="text-nowrap">OUR CAMPUS</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cbit.edu.in/about/" style={{ minWidth: '200px' }} className="col-md-4 py-2 col-12 text-dark">
                                    <div style={{ backgroundColor: '#E5DDFF' }} className=" p-0 gap-0 awards align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">

                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/award-symbol.png" alt="" />
                                            <h6 className="text-center">AWARDS & RECOGNITION</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cbit.edu.in/infrastructure/" style={{ minWidth: '200px' }} className="col-md-4 py-2 col-12 text-dark">
                                    <div style={{ backgroundColor: '#FFD39C' }} className=" p-0 gap-0 infrastructure align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">
                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/collage.png" alt="" />
                                            <h6 className="text-nowrap">INFRASTRUCTURE</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cbit.edu.in/placements/" style={{ minWidth: '200px' }} className="col-md-4 py-2 col-12  text-dark">
                                    <div style={{ backgroundColor: '#DBABA8' }} className=" p-0 gap-0 placements align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">
                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/jobs.png" alt="" />
                                            <h6 className="text-nowrap">PLACEMENTS</h6>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://cbit.edu.in/alumni/" style={{ minWidth: '200px' }} className="col-md-4 py-2 col-12 text-dark" >
                                    <div style={{ backgroundColor: '#D3ADE3' }} className=" p-0 gap-0 alumni align-items-center d-flex justify-content-center flex-column">
                                        <div className="w-100 align-items-center d-flex justify-content-center flex-column">
                                            <img className="img-fluid p-md-4 pb-0 " style={{ maxWidth: '100px' }} src="https://cbit.edu.in/wp-content/uploads/2023/05/alumni.png" alt="" />
                                            <h6 className="text-nowrap">ALUMNI</h6>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 ps-lg-5">
                            <div className="">
                                <p className="text-center mb-0 fw-bold">CBIT NOTICE BOARD</p>
                                <div style={{ borderWidth: '3px', background: '#F3F5F5', borderStyle: 'solid', borderRadius: '20px' }} className="border-danger p-2">
                                    {/* <div className="marquee-container"> */}
                                    <marquee direction="up" scrollamount="100" scrolldelay="2000">
                                        <a style={{ textDecoration: 'underline' }} className="text-primary fw-semibold">ALUMNI-MEET-2024</a>
                                        <p>ALUMNI-MEET-2024</p>
                                        <a style={{ textDecoration: 'underline' }} className="text-primary fw-semibold">2024 Placements - 21 Students selected in Accenture with 4.5 LPA</a>
                                        <p>Excellent campus wonderful placements</p>
                                        <a style={{ textDecoration: 'underline' }} className="text-primary fw-semibold">Workshop on Strategic Communication and Soft Skills Development" - 25-05-2024.
                                        </a>
                                        <p>25-05-2024</p>
                                        <a style={{ textDecoration: 'underline' }} className="text-primary fw-semibold">Excellent Campus, Wonderful Placements
                                        </a>
                                        <p>Congratulations on getting placed in to TCS</p>
                                        <a style={{ textDecoration: 'underline' }} className="text-primary fw-semibold">ALUMNI-MEET-2024</a>
                                        <p>ALUMNI-MEET-2024</p>
                                    </marquee>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>

            {/* WELCOME SECTION  */}
            <div
                className="pt-5 py-lg-5"
                style={{
                    backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2022/03/day-care-hero-blobs-background.svg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '50%',
                    objectFit: 'cover',
                    backgroundPosition: 'right',
                    // width: '100vw',  // full width of the viewport
                    // height: '85vh', // full height of the viewport
                }}
            >
                <div className="p-lg-5 container-lg">
                    <div className="row px-5 ">

                        <div className="col-md-6 d-flex flex-column gap-3">
                            <div>
                                <p className="fw-bold " style={{ textTransform: 'uppercase', letterSpacing: 2 }}>Welcome to</p>
                                <h1 style={{ fontSize: '50px', color: '#203764' }} className="fw-bold">Chaitanya Bharathi Institute of Technology</h1>
                            </div>
                            <p className="" style={{ fontSize: '14px' }}>Chaitanya Bharathi Institute of Technology was established at Proddatur in Y S R (Kadapa) District, Andhra Pradesh, India, with an objective of providing quality and value education to the students. It is one of the flagship institution started by the well known Philanthropist Sri. V. Jayachandra Reddy, Secretary and Correspondent along with his young and energetic team members.</p>

                            <div className="d-flex gap-4 ">
                                <button className="rounded-pill fw-bold btn btn-primary" >About CBIT</button>
                                <button className="rounded-pill fw-bold btn btn-success">
                                    <span></span>
                                    Download Brochure
                                </button>
                            </div>
                        </div>

                        <div className="col-md-6 pt-5 pt-lg-0  d-flex align-items-center">
                            <div className="">
                                <img className="img-fluid" style={{ borderRadius: '20px', minHeight: '350px' }} src="https://cbit.edu.in/wp-content/uploads/2023/06/CBIT-slide.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Peoples section  */}
            <div className="p-lg-5 mt-5 container-lg">
                <div className="row p-lg-4 pt-4">
                    <div className="col-md-4 mb-5">
                        <div style={{ borderWidth: '1px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: '#6CF264', padding: '35px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                            <img className="img-fluid" style={{ borderRadius: '20px', position: 'relative', top: '-70px' }} src="https://cbit.edu.in/wp-content/uploads/elementor/thumbs/chairman-q8pt24lxxbmginimgvkfu5ga1eeyt6dxkl3h3eih9k.jpg" alt="" />
                            {/* <img className="img-fluid" style={{ borderRadius: '20px', height: "17rem", width: "40rem", position: 'relative', top: '-70px' }} src={saikiran2} alt="" /> */}
                            <div className="" style={{ position: 'relative', top: '-40px' }}>
                                <h5 className="text-center fw-bold">Dr. V. Jaya Chandra Reddy</h5>
                                <p className="fw-semibold text-center">Chairman</p>
                            </div>
                            <p className="" style={{ fontSize: '14px', position: 'relative', top: '-20px' }}>CBIT is located on a beautiful campus, surrounded with abundant greenery and serenity. I strongly feel that the future of India is shaped in class rooms….</p>
                            <div className="w-100 pb-4"> <a className="text-primary f-14 fw-semibold" href="https://cbit.edu.in/about/management/">Read more {">"}</a></div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div style={{ borderWidth: '1px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: '#084BCE', padding: '35px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                            <img className="img-fluid" style={{ borderRadius: '20px', position: 'relative', top: '-70px' }} src="https://cbit.edu.in/wp-content/uploads/elementor/thumbs/V.Lohit-Reddy-q8pt26hmazp15vfw5wdoz4z7865p8kle8ueg1yfox4.jpg" alt="" />
                            {/* <img className="img-fluid" style={{ borderRadius: '20px', position: 'relative', top: '-70px' }} src={tony} alt="" /> */}
                            <div className="" style={{ position: 'relative', top: '-40px' }}>
                                <h5 className="text-center fw-bold">V. Lohit Reddy</h5>
                                <p className="fw-semibold text-center">Director</p>
                            </div>
                            <p className="" style={{ fontSize: '14px', position: 'relative', top: '-20px' }}>Success is not solely measured by accolades and grades rather, it lies in the strength of character, in the resilience to confront adversity, and in the capacity ….</p>
                            <div className="w-100 "> <a className="text-primary f-14 fw-semibold" href="https://cbit.edu.in/about/director-desk">Read more {">"}</a></div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5">
                        <div style={{ borderWidth: '1px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: '#084BCE', padding: '35px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                            <img className="img-fluid" style={{ borderRadius: '20px', position: 'relative', top: '-70px' }} src="https://cbit.edu.in/wp-content/uploads/elementor/thumbs/principal-q7gy24l666cgj3418ji4ckt74z2tjgm4qau0nv9s6g.jpg" alt="" />
                            {/* <img className="img-fluid" style={{ borderRadius: '20px', position: 'relative', top: '-70px' }} src={moma} alt="" /> */}
                            <div className="" style={{ position: 'relative', top: '-30px' }}>
                                <h5 className="text-center fw-bold">Dr. G. Sreenivasula Reddy</h5>
                                <p className="fw-semibold text-center">Principal</p>
                            </div>
                            <p className="" style={{ fontSize: '14px' }}>I am happy to take this opportunity to introduce you to the Chaitanya Bharathi Institute of Technology (CBIT),….</p>
                            <div className="w-100 py-2 pb-4"> <a className="text-primary f-14 fw-semibold" href="https://cbit.edu.in/about/principals-desk/">Read more {">"}</a></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* WELCOME SECTION 2 */}
            <div className="background-my-section">
                <div
                    className="pt-5"
                    style={{
                        backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2022/03/day-care-hero-blobs-background.svg")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                        // width: '100vw',  // full width of the viewport
                        // height: '85vh', // full height of the viewport
                    }}
                >
                    <div className="p-lg-5 pt-0 container-lg">
                        <h1 style={{ fontSize: '50px', color: '#203764' }} className="fw-bold pb-5 text-center">Department of CSE</h1>
                        <div className="row px-5 ">

                            <div className="col-md-6 d-flex align-items-cente justify-content-center flex-column gap-3">
                                <div>
                                    <p className="fw-bold " style={{ textTransform: 'uppercase', letterSpacing: 2 }}></p>
                                    <h1 style={{ fontSize: '50px', color: '#203764' }} className="fw-bold">Hod Of CSE </h1>
                                </div>
                                <p className="" style={{ fontSize: '20px' }}>Dr. Y. Dasaratha Rami Reddy, the Head of the Department in Computer Science and Engineering (CSE) at CBIT, has over 18 years of teaching experience. He holds a PhD in distributed systems from Bharath University, showcasing his deep expertise in the field. Dr. Reddy's extensive knowledge and dedication to education greatly benefit our CSE department, guiding both students and faculty toward academic excellence and innovation..</p>


                            </div>

                            <div className="col-md-6 ps-5 d-flex align-items-center">
                                <div className="">
                                    <img className="img-fluid " style={{ borderRadius: '20px', minHeight: '300px', maxHeight: "500px", }} src={(hod)} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

             {/* WELCOME SECTION 3 */}
             <div className="background-my-section">
                <div
                    className="pt-5"
                    style={{
                        backgroundImage: `url(${sai1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                        // width: '100vw',  // full width of the viewport
                        // height: '85vh', // full height of the viewport
                    }}
                >
                    <div className="p-lg-5 pt-0 container-lg">
                        {/* <h1 style={{ fontSize: '50px', color: '#203764' }} className="fw-bold pb-5 text-center">Department of CSE</h1> */}
                        <div className="row px-5 ">

                            <div className="col-md-6 d-flex align-items-cente justify-content-center flex-column gap-3">
                                <div>
                                    <p className="fw-bold " style={{ textTransform: 'uppercase', letterSpacing: 2 }}></p>
                                    <h1 style={{ fontSize: '50px', color: '#203764' }} className="fw-bold">Hod Of Data Science </h1>
                                </div>
                                <p className="" style={{ fontSize: '20px' }}>Mr. G. Sreenivasa Reddy is our esteemed Associate Professor and Head of Data Science. With his vast experience and expertise in teaching, he continually inspires and empowers students on their academic journey, helping them reach their full potential in the field of data science...</p>


                            </div>

                            <div className="col-md-6 ps-5 d-flex align-items-center">
                                <div className="">
                                    <img className="img-fluid " style={{ borderRadius: '20px', minHeight: '300px', maxHeight: "500px", }} src={(gs)} alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


            {/* Peoples section  2 */}
            <div className="">
                <div
                    className="pt-5"
                    style={{
                        backgroundImage: `url(${moma})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        // backgroundPosition: 'right',
                        // width: '100vw',  // full width of the viewport
                        // height: '85vh', // full height of the viewport
                    }}
                >
                    <h1 style={{ fontSize: '35px', color: 'black' }} className="fw-bold pb-lg-3 text-center">Developers Community </h1>
                    <div className="p-lg-5 pb-0 container-lg">
                        <div className="row p-4">
                            <div className="col-md-4 mb-5">
                                <div style={{ borderWidth: '2px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: 'black', padding: '3px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                                    <img className="img-fluid" style={{ borderRadius: '20px', width: "400px", position: 'relative',height: "350px" }} src={(sai)} alt="" />
                                    {/* <img className="img-fluid" style={{ borderRadius: '20px', height: "17rem", width: "40rem", position: 'relative', top: '-70px' }} src={saikiran2} alt="" /> */}
                                    <div className="pt-4" style={{ position: 'relative', }}>
                                        <h5 className="text-center fw-bold">G . Sai Kiran </h5>
                                        <p className="fw-semibold text-center">Frontend Developer(Team leader) </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div style={{ borderWidth: '2px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: 'black', padding: '3px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                                    <img className="img-fluid" style={{ borderRadius: '20px', width: "700px", position: 'relative' ,height: "350px"}} src={(bavi)} alt="" />
                                    {/* <img className="img-fluid" style={{ borderRadius: '20px', height: "17rem", width: "40rem", position: 'relative', top: '-70px' }} src={saikiran2} alt="" /> */}
                                    <div className="pt-4" style={{ position: 'relative', }}>
                                        <h5 className="text-center fw-bold">K. Bhavana </h5>
                                        <p className="fw-semibold text-center">UI/Ux Designer </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-5">
                                <div style={{ borderWidth: '2px', borderRadius: '20px', borderStyle: 'solid', paddingBottom: '20px', borderColor: 'black', padding: '3px' }} className="position-relative flex-column d-flex justify-content-center align-items-center">
                                    <img className="img-fluid" style={{ borderRadius: '20px', width: "700px", position: 'relative',height: "350px" }} src={(abba)} alt="" />
                                    {/* <img className="img-fluid" style={{ borderRadius: '20px', height: "17rem", width: "40rem", position: 'relative', top: '-70px' }} src={saikiran2} alt="" /> */}
                                    <div className="pt-4" style={{ position: 'relative', }}>
                                        <h5 className="text-center fw-bold">C . Abbas </h5>
                                        <p className="fw-semibold text-center">Frontend Developer </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            {/* videos  */}
            <div className="py-lg-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/06/texture-background.jpg")` }}>

                <div className="container-lg py-lg-5" style={{ paddingTop: '0px', paddingBottom: '0px', padding: '50px' }}>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 py-md-5 my-md-4">
                            <div className="d-flex gap-3 text-center flex-end flex-column align-items-center">
                                <img className="img-fluid img-thumbnail shadow" width={200} height={100} src="https://cbit.edu.in/wp-content/uploads/2023/05/KSR_2562.jpg" alt="" />
                                <h2 className="fw-bold" style={{ color: "#4175FC" }} >CBIT College Campus Tour</h2>
                                <div>
                                    <p style={{ fontSize: "14px" }}>CBIT takes pride in introducing itself as one of the most sought after institutions not only in Andhra Pradesh and Telangana, but also in India. It is a hub of high quality students who are tomorrow’s great engineers.</p>
                                    <button style={{ backgroundColor: "#0359BC", color: 'white' }} className="btn fs-5 py-1 fw-semibold btn-hover rounded-pill">View all Videos</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 position-relative" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="d-none d-lg-block">
                                <img
                                    className="img-fluid"
                                    style={{ objectFit: 'cover', height: '100%', width: 'auto' }} // Covers the vertical space and keeps the aspect ratio
                                    src={vision}
                                    alt=""
                                />
                            </div>
                            <div className="d-lg-none mt-2" style={{}}>
                                <img className="img-fluid" src={vision} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* logos  */}
            <div className="text-light p-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/05/element1.png")`, backgroundColor: '#0948A0', backgroundRepeat: 'repeat' }}>
                <div className="container-lg py-5 px-lg-5">
                    <div className="d-flex flex-wrap justify-content-between">

                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/ugc.png" alt="" />
                            <div>
                                <h5 className="fw-bold">Recognised by</h5>
                                <h5 className="fw-bold ">UGC</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/naac.png" alt="" />
                            <div>
                                <h5 className="fw-bold">Accredited by</h5>
                                <h5 className="fw-bold ">NAAC</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/nba1.png" alt="" />
                            <div>
                                <h5 className="fw-bold"> Accredited by</h5>
                                <h5 className="fw-bold ">NBA</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/aicte-logo.png" alt="" />
                            <div>
                                <h5 className="fw-bold">Approved by</h5>
                                <h5 className="fw-bold ">AICTE</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/S.B.T.E.T.png" alt="" />
                            <div>
                                <h5 className="fw-bold">Approved by</h5>
                                <h5 className="fw-bold ">S.B.T.E.T</h5>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2  justify-content-center align-items-center text-center">
                            <img width={130} className="img-circle img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/JNTUA.png" alt="" />
                            <div>
                                <h5 className="fw-bold">Affiliated of</h5>
                                <h5 className="fw-bold ">JNTUA</h5>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Courses  */}
            <div className="py-5"
                style={{
                    backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2022/03/day-care-hero-blobs-background.svg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    // width: '100vw',  // full width of the viewport
                    // height: '89vh', // full height of the viewport
                }}>
                <div className="container-lg" style={{ padding: "40px" }}>
                    <div className="row ms-md-5 ">
                        <div className="col-md-5 d-flex flex-end">
                            <img style={{ borderRadius: '25px', maxHeight: "70vh" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/COURSES.png" alt="" />
                        </div>
                        <div className="col-md-7 ps-lg-5 pt-3">
                            <div className="d-flex flex-column gap-2">
                                <h1 className="fw-bold" style={{ color: "#203764", fontSize: '50px' }} >Courses @CBIT</h1>

                                <p style={{ color: "#101218", letterSpacing: 2 }} className="text-uppercase fw-bold">providing endless opportunities to the students</p>

                                <div className="d-flex flex-column gap-3">

                                    <div className="" style={{ borderColor: "#5C8345", borderStyle: 'solid', borderWidth: "2px" }}>
                                        <div onClick={() => setShowList(!showList)} style={{ background: '#5C8345' }} className="d-flex align-items-center cursor text-light fs-6 fw-semibold p-4 py-3 gap-2">
                                            {showList ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>} UG Courses
                                        </div>
                                        {
                                            showList ? <div className="p-4 animated-list" style={{ fontSize: '14px' }}>
                                                <ul style={{ listStyleType: 'disc', listStyle: "disc" }}>
                                                    <li>
                                                        {/* <i class="fa-solid fa-circle-dot"></i>  */}
                                                        Computer Science and Engineering</li>
                                                    <li>Computer Science and Engineering (AI & ML)</li>
                                                    <li>Computer Science and Engineering (AI)</li>
                                                    <li>Computer Science and Engineering (Data Science)</li>
                                                    <li>Electronics and Communication Engineering</li>
                                                    <li>Electrical and Electronics Engineering</li>
                                                    <li>Mechanical Engineering</li>
                                                    <li>Civil Engineering</li>
                                                </ul>

                                            </div> : null
                                        }
                                    </div>

                                    <div className="" style={{ borderColor: "#5C8345", borderStyle: 'solid', borderWidth: "2px" }}>
                                        <div onClick={() => setPg(!pg)} style={{ background: '#5C8345' }} className="d-flex align-items-center cursor text-light fs-6 fw-semibold p-4 py-3 gap-2">
                                            {pg ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>} PG Courses
                                        </div>
                                        {
                                            pg ? <div className="p-4 animated-list" style={{ fontSize: '14px' }}>
                                                <ul style={{ listStyleType: 'disc', listStyle: "disc" }}>
                                                    <li>
                                                        {/* <i class="fa-solid fa-circle-dot"></i>  */}
                                                        MBA – Master of Business Administration</li>

                                                </ul>

                                            </div> : null
                                        }
                                    </div>

                                    <div className="" style={{ borderColor: "#5C8345", borderStyle: 'solid', borderWidth: "2px" }}>
                                        <div onClick={() => setDc(!dc)} style={{ background: '#5C8345' }} className="d-flex align-items-center cursor text-light fs-6 fw-semibold p-4 py-3 gap-2">
                                            {dc ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>} Diploma Courses
                                        </div>
                                        {
                                            dc ? <div className="p-4 animated-list" style={{ fontSize: '14px' }}>
                                                <ul style={{ listStyleType: 'disc', listStyle: "disc" }}>
                                                    <li>
                                                        {/* <i class="fa-solid fa-circle-dot"></i>  */}
                                                        DCE</li>
                                                    <li>DECE</li>
                                                    <li>DEEE</li>
                                                    <li>DCME</li>

                                                </ul>

                                            </div> : null
                                        }
                                    </div>



                                </div>
                                <div>
                                    <button style={{}} className="btn rounded-pill border-dark border hover-black">Know more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* dipartments  */}
            <div className="text-light p-lg-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/06/bgp.jpg")`, backgroundRepeat: 'repeat' }}>
                <div className="container-lg p-lg-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex flex-column gap-3">
                                <h1 style={{ fontSize: "55px" }} className="fw-bold ms-4">Departments</h1>
                                <ul className="text-center d-flex flex-column gap-3">
                                    <li style={{ background: "#9C977C" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/civil-engineering/">Civil Engineering</a></li>
                                    <li style={{ background: "#82A578" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/electrical-and-electronics-engineering/">Electrical and Electronics Engineering</a></li>
                                    <li style={{ background: "#438684" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/mechanical-engineering/">Mechanical Engineering</a></li>
                                    <li style={{ background: "#D87E57" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/electronics-and-communication-engineering/">Electronics and Communication Engineering</a></li>
                                    <li style={{ background: "#D35C5C" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/computer-science-and-engineering/">Computer Science and Engineering</a></li>
                                    <li style={{ background: "#4D5AB3" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/humanities-sciences/">Humanities & Sciences</a></li>
                                    <li style={{ background: "#0359BC" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/master-of-business-administration/">Master of Business Administrationg</a></li>
                                    <li style={{ background: "#4B4F58" }} className="rounded-pill department-animi cursor p-3 fw-semibold py-2" ><a href="https://cbit.edu.in/departments/diploma-courses/">Diploma Courses</a></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex mb-3 align-items-center">
                            <div>
                                <img className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/06/dept.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* infrastructure  */}
            <div className="py-5 pt-0"
                style={{
                    backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2022/03/day-care-hero-blobs-background.svg")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                    // width: '100vw',  // full width of the viewport
                    // height: '89vh', // full height of the viewport
                }}>
                <div className="container-md " style={{ padding: "20px" }}>
                    <div className="row ">
                        <h4 className="text-center fw-semibold">CBIT</h4>
                        <h1 style={{ color: "#0274BE", fontSize: "50px" }} className="text-center mb-4 mt-0 fw-bold">Infrastructure</h1>

                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#0E4DD1" }} className="fw-bold my-3">Building Area</h4>
                            <p>A well-equipped infrastructure to promote the academic and cultural activities of CBIT is one of our primary accomplishments.</p>
                            <hr style={{ color: "#0E4DD1", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#691FA5" }} className="fw-bold my-3">Library</h4>
                            <p>The CBIT Library is considered one of the most resourceful centres in twin cities since it caters to the current educational need on a wide scale.</p>
                            <hr style={{ color: "#691FA5", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#8FA503" }} className="fw-bold my-3">Cafeteria</h4>
                            <p>The institute has an ideal cafeteria that takes utmost care in providing hygienic and wholesome food at subsidized rates.</p>
                            <hr style={{ color: "#8FA503", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#FF5858" }} className="fw-bold my-3">Computer Center</h4>
                            <p>Our students have unrestricted, round-the-clock access to air-conditioned computer laboratories equipped with structured fibre...</p>
                            <hr style={{ color: "#FF5858", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#BB7800" }} className="fw-bold my-3">Auditorium</h4>
                            <p>CBIT has a well-structured auditorium built in 3000 square feet with latest provisions. Fully air-conditioned with a seating capacity of 500..</p>
                            <hr style={{ color: "#BB7800", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#C706C3" }} className="fw-bold my-3">Health Services</h4>
                            <p>The CBIT Health Centre provides healthcare facilities to the students whenever required. Registered Doctors are called in case of emergency...</p>
                            <hr style={{ color: "#C706C3", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#489739" }} className="fw-bold my-3">Laboratories</h4>
                            <p>The College provides a well equipped Computer and Statistics laboratory for students to carry out their innovative and scientific experiments.</p>
                            <hr style={{ color: "#489739", borderWidth: "2px" }} className="mt-4" />
                        </div>
                        <div className="col-md-4 d-flex flex-column text-center">
                            <h4 style={{ color: "#3CB184" }} className="fw-bold my-3">Sports & Gymnasium</h4>
                            <p>Physical fitness plays an important role in developing the overall personality of a student since a physically balanced student is mentally balanced too.</p>
                            <hr style={{ color: "#3CB184", borderWidth: "2px" }} className="mt-4" />
                        </div>


                    </div>
                </div>
            </div>

            {/* Achiments  */}
            <div className="py-5">
                <div className="text-center">
                    <h1 className="fw-bold">A Quality Student Deserves A Quality Education</h1>
                    <p>Your dream college is just a step away- Discover the possibilities and open the door to your future with us !!</p>
                    <div className="mx-auto">
                        <button className="btn hover-black rounded-pill btn-primary">Apply Now</button>
                    </div>
                </div>
            </div>
            <div className="text-light p-lg-4" style={{ background: "#E7E7E7" }}>
                <div className="container-lg w-100 py-3 p-lg-5">
                    <h1 style={{ color: "#203764", fontSize: "50px" }} className=" fw-bold text-center">Honours & Achievements</h1>
                    <div className="d-flex justify-content-center mx-auto flex-wrap p-lg-5 pt-3">

                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/15-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/14-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/13-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/12-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/11-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/10-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/9-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/8-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/7-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/6-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/5-300x300.jpg" alt="" />
                        </div>
                        <div className="m-2">
                            <img style={{ width: "10rem", borderRadius: "15px" }} className="rounded img-fluid img-thumbnail" src="https://cbit.edu.in/wp-content/uploads/2023/06/4-300x300.jpg" alt="" />
                        </div>

                    </div>

                    <div className="w-100 text-center">
                        <button className="btn hover-black mx-auto py-1 fs-5 fw-semibold rounded-pill btn-primary"><a href="https://cbit.edu.in/departments/computer-science-and-engineering/cse-student-achievements/">View More</a></button>
                    </div>
                </div>
            </div>


            {/* placements  */}

            <div className="container-lg">
                <h1 style={{ color: "#203764", fontSize: "50px" }} className="pt-5 fw-bold text-center">Honours & Achievements</h1>
                <div className="row p-lg-5 gap-5">
                    <div className="col-lg-5">
                        <img style={{ borderRadius: "30px", }} className="ms-auto img-fluid shadow" src="https://cbit.edu.in/wp-content/uploads/2023/06/placement.jpg" alt="" />
                    </div>
                    <div className="col-lg-5">
                        <p style={{ textTransform: "uppercase", color: "#2093DA" }} className="fw-semibold">
                            We at CBIT, extend a Hearty Invitation to all our Recruiting Partners.
                        </p>
                        <div className="text-dark">
                            <p>The college has career guidance and placement cell meant to provide career guidance and placement training to the students.</p>
                            <p>The placement cell organizes on-campus and off-campus recruitments and pre placement training programs in aptitude test, group discussions, interviews and presentation.</p>
                            <p>Mock interviews and GDs are conducted on a regular basis so as to equip final and pre-final students to face the challenges of recruitment scenario.</p>
                            <p>Hearty Congratulations to the students placed through campus recruitment in DBS, TCS, Infosys Technologies Limited, Tech Mahindra, NTT DATA, Mind Tree, WIPRO,HCL ,Hexaware and so on…</p>
                        </div>
                        <button style={{ background: "#0359BC" }} className="btn text-light hover-black py-2 btn-hover rounded-pill fw-semibold">Know More</button>
                    </div>
                </div>
                <div style={{ background: "white" }} className="my-3">
                    <marquee behavior="smooth" direction="left">
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/1.png" alt="" />
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/2.png" alt="" />
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/3.png" alt="" />
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/4.png" alt="" />
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/5.png" alt="" />
                        <img style={{ maxWidth: "10rem" }} className="img-fluid" src="https://cbit.edu.in/wp-content/uploads/2023/05/6.png" alt="" />
                    </marquee>
                </div>
            </div>

            {/* footer  */}
            <div className="text-light p-lg-4" style={{ backgroundImage: `url("https://cbit.edu.in/wp-content/uploads/2023/05/footer.png")`, backgroundRepeat: 'repeat' }}>
                <div className="container-lg">
                    <div className="row p-5 text-dark">
                        <div className="col-md-2 col-sm-6 col-12">
                            <div className="d-flex align-items-center text-dark flex-column">
                                <img className="img-fluid" style={{ width: "15rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                                <p className="text-left">Chaitanya Bharathi Institute Of Technology - Proddatur in Y S R (Kadapa) District, Andhra Pradesh</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4 ">Important Links</h4>
                            <ul className="text-primary">
                                <li ><a className=" text-primary" href="https://cbit.edu.in/userfiles/link/AICTE_Mandatory%20Disclosures.pdf">AICTE Mandatory Disclosures</a></li>
                                <li><a href="https://cbit.edu.in/iic/" className="text-primary">IIC</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/nss/">NSS</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-achievements/">Student Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/iqac/faculty-achievements/">Faculty Achievements</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/student-welfare/">Student Welfare</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/downloads/">Downloads</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/committee/">Committee</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12">
                            <h4 className="fw-bold py-4 ps-4">Academics</h4>
                            <ul className="text-primary">
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/">Admission Procedure</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-calendar/">Academic Calendar</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/academic-council/">Academic Council</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/about/affiliations/">Affiliations</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/admission-form/">Admission Form</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/admissions/courses-offered/">Courses Offered</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/campus-life/">Campus Life</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a></li>
                                <li><a className="text-primary" href="https://cbit.edu.in/infrastructure/cafeteria/">Cafeteria</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 ms-md-4 col-sm-6 col-12">
                            <h4 className="fw-bold py-4">Get in touch</h4>
                            <div>
                                <p>Chaitanya Bharathi Institute Of Technology,</p>
                                <p>Vidya Nagar, Proddatur, YSR Kadapa (Dist.), Andhra Pradesh 516360,</p>
                                <p>Phone: <span className="text-primary">+91-7659807111</span></p>
                                <p>Email: <span className="text-primary"> info@cbit.edu.in</span></p>
                                <div className="d-flex gap-4">
                                    <a className="text-primary" href="https://cbit.edu.in/departments/">Departments</a>
                                    <a className="text-primary" href="https://cbit.edu.in/iqac/aqar/">AQAR</a>
                                    <a className="text-primary" href="https://cbit.edu.in/placements/">Placements</a>
                                    <a className="text-primary" href="https://cbit.edu.in/contact/">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3" style={{ background: "#203764" }}>
                <div className="mx-auto text-center">
                    <img className="img-fluid" style={{ width: "5rem" }} src="https://cbit.edu.in/wp-content/uploads/2023/05/cbit.png" alt="" />
                    <p style={{ color: "#8A8A8E" }} className="text-center">
                        Copyright © 2024 www.cbit.edu.in | Designed by
                        <span style={{ color: "#1E77D1" }}> Shadow coders <img style={{ width: "1rem" }} className="img-fluid" src="https://www.briaux.com/briaux16.png" alt="" /></span>
                    </p>
                </div>
            </div>

        </div>
    )
}

