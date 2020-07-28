import React from 'react'

export const Home = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <div className="card-image">
                    <img src="https://images.unsplash.com/photo-1557933245-965fc049a804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                    <i className ="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <h6>Nice post</h6>
                    <input type="text" placeholder='add a comment'/>
                </div>
            </div>
        </div>
    )
}
