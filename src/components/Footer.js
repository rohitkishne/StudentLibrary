import React from 'react'

export default function Footer() {
    return (
        <div >
            <footer className="footer bg-dark py-3 ">
                <div className="container d-flex ">
                    <span className=" flex-grow-1 bd-highlight"><a href='/about'><i className="far fa-copyright text-light"> StudentLibrary | 2021</i></a></span>
                    <span className="bd-highlight mx-2 "><a href='https://www.facebook.com/' rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f text-light"></i></a></span>
                    <span className="bd-highlight mx-2"><a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' rel="noopener noreferrer" target='_blank'><i className="fab fa-twitter text-light"></i></a></span>
                    <span className="bd-highlight mx-2"><a href='https://www.instagram.com/' rel="noopener noreferrer" target='_blank' ><i className="fab fa-instagram text-light"></i></a></span>
                </div>
            </footer>
        </div>
    )
}
