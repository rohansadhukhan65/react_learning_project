import React , {useState} from 'react'

import {changeron} from '../context'

export default function TextForm(props) {
    const [text , setText] = useState('')

    const onchangeHandel = (event) => {
        setText(event.target.value)
    }

    const upperconv = () =>
    {
        let newtext = text.toUpperCase()
        setText(newtext)
        changeron(newtext)
    }

    let wrdlen = 0
    if(text !== '')
    {
       wrdlen = text.split(" ").length
    }

    return (
        <div className="mx-5">
        
           
                <div className="mb-3">
                    <label htmlFor="mybox" className="form-label h3">{props.heading} </label>
                    <textarea onChange={onchangeHandel} value={text} type="email" rows="9" className="form-control" id="mybox" aria-describedby="emailHelp" placeholder={props.heading} ></textarea>
                </div>
                
                
                <button onClick={upperconv}  className="btn btn-primary" >Convert To UpperCase</button>
            
                <div className="my-5 text-center">
                    <h1>Text Summary</h1>
                    <h5>{wrdlen} words and {text.length} characters </h5> 
                    <h5>{0.008 * wrdlen} Minutes read</h5> 
                </div>
        </div>
    )
}
