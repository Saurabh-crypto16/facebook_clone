import React, { useState ,useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'
import Post from "./Post"
import db from "./firebase"
import { keys } from '@material-ui/core/styles/createBreakpoints'



function Feed() {
    const [posts, setPosts] = useState([]);

    //this block runs only once when initialized 
    //it is arealtime connection to the database
    //snapshot checks for latest changes in the database and rerenders it immediately 
    //posts will be displayed in order which are uploaded last
    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp","desc")
            .onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>(
                {id: doc.id,data:doc.data()}
            )))
        })
    }, [])

    return (
        <div className="feed">
            
            <StoryReel />
            
            <MessageSender />

            {posts.map((post)=> (
                <Post
                keys={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
            
        </div>
    )
}

export default Feed
