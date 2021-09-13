import React from 'react'

import { Suspense, lazy } from 'react';


// components----------------------------------
// import context
import {rohan} from './context';

// import TextForm from './sub_component/TextForm'
const TextForm = React.lazy(() => import('./sub_component/TextForm'));


export default function Main() {
    
    let name = "Text Utils"
    return (
        <>



        
            <h1 className="text-center fw-bold">Text Utils</h1>
        
            {/* textform
            =========================== */}
            <div className="container my-5">
                <Suspense fallback={<div className="text-center">Loading...</div>}>
                    <TextForm heading="Enter Your Text To Analyaze"/>
                </Suspense>
            </div>
            {/* ======================== */}
    
    
    
        </>
    )
}
