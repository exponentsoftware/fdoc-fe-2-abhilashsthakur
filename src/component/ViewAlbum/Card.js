import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <div>
            <div className="card" style={{width: "18rem", top:"2rem"}}>
                <img className="card-img-top" src={"https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg"} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link  to={`${props.id}`} class ="btn btn-primary">Go somewhere</Link>
                {/* <Route path='/product/:id' exact component={specificProduct}/> */}
                </div>
            </div>
        </div>
    )
}

export default Card
