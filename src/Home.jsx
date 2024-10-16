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
                    style={{ height: "90vh", zIndex: -1 }}
                    className="w-100 overflow-hidden position-absolute overflow-hidden position-relative mt-1"
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
                            src={sai1}
                            style={{ objectFit: 'cover', width: '100%', height: '90vh', zIndex: '-1' }}
                            className=""
                        />
                    </div>

                    {/* Text content */}
                    <div className="position-absolute top-50 text-light text-center w-100" style={{ zIndex: 1 }}>
                        <h1 style={{ fontSize: '50px' }}>Welcome To Student Corner </h1>
                    </div>
                </div>

                <div className="" style={{ height: "90vh" }}></div>
            </div>

        

            <div className="p-3" style={{ background: "#203764" }}>
                <div className="mx-auto text-center">
                    <p style={{ color: "#8A8A8E" }} className="text-center">
                        Copyright © 2024 www.cbit.edu.in | Designed by
                        <span style={{ color: "#1E77D1" }}> Shadow coders <img style={{ width: "1rem" }} className="img-fluid" src="https://www.briaux.com/briaux16.png" alt="" /></span>
                    </p>
                </div>
            </div>

        </div>
    )
}

