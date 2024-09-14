import Post from "../Post"
import { useEffect } from 'react';
import {useState} from 'react'



function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/post').then(response =>{
            response.json().then(posts =>{
                setPosts(posts)
            })
        })
    },[])
    return(
        <>
            {posts.length>0 && posts.map(post=>(
                <Post {...post}/>
            ))}
        </>
    )
}

export default IndexPage