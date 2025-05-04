import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../postsRedux';
import PostSummary from '../features/PostSummary';


const CategoryPosts = () => {
    const {id} = useParams();
    const posts=useSelector(getAllPosts);
    const filteredPosts=posts.filter(post=>post.category===id);

    return (
        <div>
            <h3 className="my-3">Posts in category: {id}</h3>
            {filteredPosts.length > 0 ? (
                <PostSummary posts={filteredPosts}/>
            ) : (
                <p>No posts in this category...</p>
            )}
        </div>
    );
}

export default CategoryPosts;