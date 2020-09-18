import { Avatar, Button } from '@material-ui/core'
import React,{useState} from 'react'
import './TweetBox.css';
import db from './firebase';

function TweetBox() {
 const [tweetMessage, setTweetMessage] = useState('');
 const [tweetImage, setTweetImage] = useState('');
 const sendTweet = e =>{
    e.preventDefault();
    db.collection('posts').add({
        displayName:'elaaf',
        username:"nabeela",
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsBI8MGkbKUW7PqlJD5wYX7cMpMDnJPXw64A&usqp=CAU"
    })
    setTweetMessage("");
    setTweetImage("");
 }
    return (
        <div className="tweetBox">
         <form>
             <div className="tweetBox__input">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIKxcIwCNaD5CJJZw4nHOu-qjZG7lzojsbeA&usqp=CAU"/>
            <input value={tweetMessage}
            onChange={e =>setTweetMessage(e.target.value)}
            placeholder="what's happening" type="text"/>
             </div>
             <input value={tweetImage}
             onChange={e =>setTweetImage(e.target.value)}
                 className="tweetBox__imageInput"
                 placeholder="Enter image URL"
                 type="text"
             />
             <Button  onClick={sendTweet}          
             className="tweetBox__tweetButton">Tweet</Button>
         </form>
        </div>
    )
}

export default TweetBox
