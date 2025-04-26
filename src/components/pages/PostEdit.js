import React from 'react';
import { useParams } from 'react-router-dom';

const PostEdit = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Post Edit Page - Edytuj post o ID: {id}</h1>
    </div>
  );
};

export default PostEdit;
