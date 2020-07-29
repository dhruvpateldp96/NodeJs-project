import React,{useState, useEffect} from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'

export const CreatePost = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic: url
                })
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error){
                    M.toast({html:data.error, classes:"#c62828 red darken-3 "})
                }
                else{
                    M.toast({html:"Created Post Successfully", classes:'#43a047 green darken-1'})
                    history.push('/')
                }
            }).catch(err =>{
                console.log(err)
            })
        }
        
    }, [url])



    const PostDetails = () => {
        const data = new FormData()
        data.append('file',image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","cnq")
        fetch("https://api.cloudinary.com/v1_1/dhruvdp96/image/upload", {
            method:"post",
            body:data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => {
            console.log(err)
        })

    }


    return (
        <div className = "card input-filed"
            style={{
                margin: "30px auto",
                maxWidth: "500px",
                padding: "20px",
                textAlign: "centre",
            }}
        >
            <input 
                type="text" 
                placeholder="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}/>
            <input 
                type="text" 
                placeholder="body"
                value={body}
                onChange={(event) => setBody(event.target.value)}/>

            <div className="file-field input-field">
                <div className="btn  #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input 
                        type="file"
                        onChange={(event) => {setImage(event.target.files[0])}}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick= {() => PostDetails()}>Submit Post</button>

        </div>
    )
}
