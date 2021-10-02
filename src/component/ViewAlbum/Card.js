import React from 'react'
import { Link } from 'react-router-dom'

function Card({artist,album}) {
    return (
        <div>
            <div className="card" style={{width: "18rem", top:"2rem"}}>
                <img className="card-img-top" src={"https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg"} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Title : {album}</h5>
                <p className="card-text">Artist : {artist}</p>
                {/* <Link  to={`${props.id}`} class ="btn btn-primary">Go somewhere</Link> */}
                {/* <Route path='/product/:id' exact component={specificProduct}/> */}
                </div>
            </div>
        </div>
    )
}

export default Card
