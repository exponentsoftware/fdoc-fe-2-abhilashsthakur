import React, { useEffect, useState } from 'react'
import Card from './Card'

import axios from 'axios'


function List() {

    const [state, setstate] = useState([])

    const data =async (e) => {
        const album=await axios.get(`http://localhost:8000/Albums`).then(res=>setstate(res.data))
    }
useEffect(() => {
    data()
    
}, [])
    return (
        <>

                <div className=" ml-3 d-flex flex-wrap" style={{gap:"10px"}}>
         {
            state.map(item=> <Card key={item.id} artist={item.artist} album={item.album}  /> )
        } 
        
        </div>
        </>
    )
}

export default List
