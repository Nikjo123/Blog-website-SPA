import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import Editor from '../Editor';

function CreatePost(){
    const [title,setTitle] = useState('')
    const [summary,setSummary] = useState('')
    const [content,setContent] = useState('')
    const [files,setFiles] = useState('')
    const [redirect,setRedirect] = useState(false)
    async function createNewPost(ev){
        const data = new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('file',files[0]) //even if u pick multiple files it grabs the first 1.
        ev.preventDefault()
        console.log(files)
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
            credentials: 'include',
        })
        if(response.ok){
            setRedirect(true);
        }
    }

    if(redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <form onSubmit={createNewPost}>
            <input type="title" 
            placeholder={'title'} 
            value ={title} 
            onChange={ev =>{setTitle(ev.target.value)}} required/>
            <input type="summary"
            placeholder={'summary'} 
            value={summary} 
            onChange={ev=>{setSummary(ev.target.value)}} required/>
            <input type="file"
            onChange={ev=>setFiles(ev.target.files)} required/>
            <Editor onChange={content} value={setContent}/>
            <button style={{marginTop: '5px'}}>
                CREATE POST
            </button>
        </form>
    )
}

export default CreatePost;