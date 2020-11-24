import React from "react";
import { Link } from "gatsby";
import PostLink from "./post-link";
import './post-strip.css';

const PostStrip = (props) => {

  return (
    <div className='PostStrip'>
        <div className='grid-header'>
          <h5>{props.title}</h5>
          <Link to={props.link}>See All {props.title} Posts</Link>
        </div>
        <hr/>
        <div className='grid'>
        {
        //the posts from GraphQL Query are 'edges', but we'll call them posts
        props.posts
            .filter(post => !!post.node.frontmatter.date)
            .map(post => 
                <PostLink key={post.node.id} post={post} />
            )
        }
        </div>
    </div>
  )
};

export default PostStrip;