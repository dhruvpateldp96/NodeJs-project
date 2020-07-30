import React, {useEffect, useState, useContext} from 'react'
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'
import Ellipsis from '@bit/joshk.react-spinners-css.ellipsis';

export const UserProfile = () => {
    const [userProfile, setUserProfile] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    // console.log(userid)
    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }).then(res => res.json())
        .then(result => {
            // console.log(result)
            setUserProfile(result)
            
        })
    }, [])


    const followUser = () =>{
        fetch('/follow', {
            method:'put',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            // setUserProfile(data)
            
        })
    }
    // console.log(userProfile)
    return (
        <>
        {userProfile.user ? 
        
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        margin:"18px 0px",
                        borderBottom:"1px solid grey"
                    }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                        src="https://images.unsplash.com/photo-1595876102398-e9260821d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"
                    />
                </div>
                <div>
                   
                    <h4>{userProfile.user.name} </h4>
                    <h5>{userProfile.user.email} </h5>
                    <button 
                        className="btn waves-effect waves-light #64b5f6 blue darken-1"
                        onClick={() => followUser()}
                    >Follow</button>
                    
                    <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
                        <h6>{userProfile.posts.length}</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>

                    </div>

                    
                
                </div>
            </div>
            

            <div className="gallery">
                {
                    userProfile.posts.map(item => {
                        return(
                            <img key={item._id} className="item" src={item.photo} alt={item.title}/>
                        )
                        
                    })
                }
                
      
            </div>
        </div>
        
        
        : <div className='gallery'><Ellipsis color="black" size='100px'/></div>}
        
        </>
    )
}
