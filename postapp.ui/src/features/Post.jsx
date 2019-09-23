import React from 'react';

//  We get the post attribute that we have passed in "props"
const Post = ({post}) =>{
    return( 
    <div className="card" style={{width: '18rem'}}>
        <img src={post.photoUrl} className="card-img-top" alt={post.userName}/>
        <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <p className="card-text">
                <small className="text-muted">
                    Posted by {post.userName} 3 min ago
                </small>
            </p>
        </div>
    </div>
  );
}

export default Post;