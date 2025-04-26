import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from './PostForm';
import { addPost } from '../../postsRedux';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    const newPost = {
      ...post,
      id: uuidv4(),
    };
    dispatch(addPost(newPost));
    navigate('/');
  };

  return (
    <PostForm action={handleSubmit} actionText="Add post" />
  );
};

export default AddPostForm;
