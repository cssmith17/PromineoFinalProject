import React from 'react';

//Contact component defaults to a 404 missing page error

export default function Contact() {
    return (
        <div className="grid grid-cols-3">
        <h1 className="text-4xl font-boldest text-red-600 col-start-2 p-2">404 Error! Page Not Found.</h1>
        <img className="col-start-2" src="/../images/404.jpg"></img>
        </div>
    )
}