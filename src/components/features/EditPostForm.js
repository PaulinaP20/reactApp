import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../features/PostForm.js'
import { getPostById, editPost } from '../../postsRedux';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector((state) => getPostById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!post) {
      navigate('/');
    }
  }, [post, navigate]);

  const handleSubmit = (updatedPost) => {
    dispatch(editPost({ ...updatedPost, id }));
    navigate('/');
  };

  return (
    <div>
      {post ? (
        <PostForm
          action={handleSubmit}
          actionText="Edit post"
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          shortDescription={post.shortDescription}
          content={post.content}
          category={post.category}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditPostForm;
