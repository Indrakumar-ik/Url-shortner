import React, {useEffect} from 'react'
import db from './firebase'
import {useParams} from 'react-router-dom'
function Redirect() {
    const {uuid} = useParams()
    useEffect(() => {
        let query = db.collection('urls').where('uid', '==', uuid)
        query.onSnapshot((data)=>{
            if(data.empty){
                alert('URL not found')
            }
            let finalData = data.docs[0].data()
            window.location.href = finalData.url
        })
    }, [uuid])
    return (
        <div>
            
        </div>
    )
}

export default Redirect
