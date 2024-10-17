import { useEffect, useState } from "react"
import Navbar from "../navbar"



const DownloadPageFour = () =>
{
    const semisters = [
        "Important Questions , IMportant Question With Answers , Study Material Updated soon ..."
    
    ]
    const semisterPaper = [
        []
    ]
    const semisterPaperDownloads = [
        [[]], 
        [[]]
    ]
    const semisterPaperDownloadsPdfs = [
        [[]],
        [[]],
        [[]]
    ]

    

    {/* material section */}
    const qb = [
        "Important Questions , IMportant Question With Answers , Study Material Updated soon ..."
    
    ]
    const qbp = [
        [],
    ]
    const qbd = [
        [[]], 
        [[]]
    ]
    const qbdf = [
        [[]],
        [[]]
    ]


    
    return (
        <div className="" style={{ overflowX: "hidden" }}>

            <div className="position-relative w-100">
                <Navbar />
                {/* imge */}

            </div>
            {/* question banks   */}
            <div className="my-5">
                <h1 className="text-center fw-bold" >4st Year 1st Semester   </h1>

                {
                    semisters.map((value, i) => {
                        return <>
                            <Papers ind={i} data={semisterPaper} pdfFiles={semisterPaperDownloadsPdfs} data2={semisterPaperDownloads} value={value} />
                        </>
                    })
                }

            </div>
            
             {/* materials   */}
             <div className="my-5">
                <h1 className="text-center fw-bold" >4st Year 2st Semester  </h1>

                {
                    qb.map((value, i) => {
                        return <>
                            <Papers ind={i} data={qbp} pdfFiles={qbdf} data2={qbd} value={value} />
                        </>
                    })
                }

            </div>

            

        
            <div className="p-3 " style={{ background: "#203764" }}>
                <div className="mx-auto text-center">
                    <p style={{ color: "#8A8A8E" }} className="text-center">
                        Copyright © 2024 Trojen Horse | Designed by
                        <span style={{ color: "#1E77D1" }}> Shadow coders <img style={{ width: "1rem" }} className="img-fluid" src="https://www.briaux.com/briaux16.png" alt="" /></span>
                    </p>
                </div>
            </div>

        </div>
    )
}

const Papers = ({ data, value, ind, data2,pdfFiles }) => {
    const [open, setOpen] = useState(false)

    return <>

        <div className="mx-auto w-100 text-center gap-3">
            <div className=" p-2">
                <button onClick={() => setOpen(!open)} style={{ borderWidth: '2px', textTransform: 'uppercase', borderStyle: 'solid', borderColor: '#A52A2A', background: '#DEFDFF', borderRadius: '15px' }}
                    className="btn  p-3 hoverDoenloadBtn py-2 fw-semibold">
                    {value}
                </button>
            </div>
            <div>
                {
                    open ? <>
                        {
                            data[ind].map((value2, i2) => {
                                return <>
                                    <SemisterPaperDownloads data={data2} pdfFiles={pdfFiles} ind={ind} ind2={i2} value={value2} />
                                </>
                            })
                        } </> : null
                }
            </div>
        </div>

    </>
}

const SemisterPaperDownloads = ({ data, value, ind, ind2,pdfFiles }) => {
    const [open, setOpen] = useState(false)
    const p = ''

    return <>
        <div style={{}} className="row d-flex justify-content-center align-items-center mx-4">
            <button onClick={() => setOpen(!open)} className="text-center col-lg-6 d-flex justify-content-between mx-lg-5 mx-3 btn mt-2 p-2 fw-semibold" style={{ background: '#F2D1FF', }}>
                {value} <span>{open ? "-" : "+"}</span> </button>
            {/* value3.toUppercase.replace(" ","") */}
        </div>
        <div className="row d-flex justify-content-center align-items-center mx-4">
            {
                open ? data[ind][ind2].map((value3, i3) => {
                    return <a href={pdfFiles[ind][ind2][i3]} download style={{ background: '#E6E6E6', }} className="text-primary  col-lg-6 mx-lg-5 mx-3 mt-1 p-2 py-1 fs-6">{value3}</a>
                }) : null
            }
        </div>

    </>


}
export default DownloadPageFour