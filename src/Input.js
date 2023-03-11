import React, {useState} from 'react'
import db from './firebase'
import ShortUniqueId from 'short-unique-id';
// const ShortUniqueId = require('short-unique-id');


// const tinyid = require('tiny-unique-id')

function Input() {
    const [input, setInput] = useState('')
    const [shorten, setShorten] = useState('')
  
    const handleDb = async() => {
         const uid = new ShortUniqueId({ length: 5 });
         let uuid = uid(); 
        await db.collection('urls').add({
            url: input,
            uid: uuid
        })
        setShorten(`${window.location.origin}/${uuid}`)
    }
    return (
        <div className='container'>
            <h1 className='mt-5'>URL SHORTENER</h1>
            <center>
            <div className='mt-4'>
            <input type="text" disabled className='form-control' value={shorten}/>
            <input type="url" value={input} onChange={e=> setInput(e.target.value)} className='form-control mt-3'placeholder='Enter URL'/>
            <button onClick={handleDb} className='btn btn-dark mt-3'>Shorten URL</button>
            </div>
            </center>
        </div>
    )
}

export default Input
