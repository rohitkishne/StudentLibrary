import React from 'react'
// import NoteContext from '../context/notes/NoteContext'
import bg from "../about.jpg"

export default function About() {
    const aboutbg = {
        background: '#cd7d5e',
    
    }

//     const aboutd = {
//      // background: 'khaki',
    
// }

// const a = useContext(NoteContext)
// useEffect(() => {
//    a.update();
//    //eslint-disable-next-line
// }, [])
return (
    <>
        <div className="container mb-3">
            <div className="card " style={aboutbg}>
                <div className="card-header text-center">
                    <h4><strong>ABOUT</strong></h4>
                </div>
                <div className="card-body" style={{backgroundImage: `url(${bg})`,backgroundSize: 'cover'}}>
                    <blockquote className="blockquote mb-0" >
                        <p>A library is a collection of materials, books or media that are easily accessible for use and not just for display purposes. It is responsible for housing updated information in order to meet the user's needs on a daily basis. </p>

                    </blockquote>
                </div>
            </div>
        </div>
        <div className="container-fluid" >
            <div className="row align-items-start">
                <div className='col'>
                    <div className="card">
                        <img src={require("../open.jpg")} height="320px" width="532px" className="card-img-top" alt="Wait until Reload..." />
                        <div className="card-body">
                            <h5 className="card-title">Open Library</h5>
                            <p className="card-text">Open Library is an open, editable library catalog, building towards a web page for every book ever published.</p>
                            <a href="https://openlibrary.org/collections/k-12" rel="noreferrer" target='_blank' className="btn btn-primary">Explore More...</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card">
                        <img src={require("../digital.jpg")} height="320px" width="532px" className="card-img-top" alt="Wait until Reload..." />
                        <div className="card-body">
                            <h5 className="card-title">National Digital Library</h5>
                            <p className="card-text">National Digital Library of India (NDLI) is a virtual repository of learning resources which is not just a repository with search/browse facilities but provides a host of services for the learner community.</p>
                            <a href="https://ndl.iitkgp.ac.in/" rel="noreferrer" target='_blank' className="btn btn-primary">Explore More...</a>
                        </div>
                    </div>
                </div>
           

            <div className="row align-items-start my-5">
                <div className='col'>
                    <div className="card">
                        <img src={require("../openlibrary.jpg")} height="320px" width="532px" className="card-img-top" alt="Wait until Reload..." />
                        <div className="card-body">
                            <h5 className="card-title">Open Textbook Library</h5>
                            <p className="card-text">Open textbooks are licensed by authors and publishers to be freely used and adapted. Download, edit and distribute them at no cost.</p>
                            <a href="https://open.umn.edu/opentextbooks" rel="noreferrer" target='_blank' className="btn btn-primary">Explore More...</a>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card">
                        <img src={require("../kids.png")} height="320px" width="532px" className="card-img-top" alt="Wait until Reload..." />
                        <div className="card-body">
                            <h5 className="card-title">Kids Library</h5>
                            <p className="card-text">Nurture a Love of Reading and Learning With Epic! - The Leading Digital Library For Kids. Support Your Child's Distance Learning with the Leading Digital Reading Platform For Kids.</p>
                            <a href="https://www.getepic.com/" rel="noreferrer" target='_blank' className="btn btn-primary">Explore More...</a>
                        </div>
                    </div>
                </div>
                </div>
                <div className='col-md-6'>
                    <div className="card">
                        <img src={require("../zlib.png")} height="320px" width="532px" className="card-img-top" alt="Wait until Reload..." />
                        <div className="card-body">
                            <h5 className="card-title">Z-Library</h5>
                            <p className="card-text">Here you can always find the relevant information on the available domains for your region.
We strongly recommend creating an account in our library so the system can automatically match the available domain for you.</p>
                            <a href="https://z-lib.org/" rel="noreferrer" target='_blank' className="btn btn-primary">Explore More...</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
    </>
)
}

