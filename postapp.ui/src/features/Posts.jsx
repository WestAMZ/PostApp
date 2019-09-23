import React,{Component} from 'react';
import postService from '../services/postServices';
import Post from "./Post";

class Posts extends Component
{
    state = {
        posts: []
    };
    async componentDidMount(){
        //  Assigning the value of data in a new variable called posts
        const {data : posts} = await postService.getPosts();
        this.setState({ posts });
    }
    render()
    {
        const {posts} = this.state;
        return(
            <div >
                {posts.map(post =>(
                    <Post 
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        );
    }
}

export default Posts;