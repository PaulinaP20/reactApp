import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, id, title, author, publishedDate, shortDescription, content }) => {
  const [formData, setFormData] = useState({
    id:id || '',
    title: title || '',
    author: author || '',
    publishedDate: publishedDate || '',
    shortDescription: shortDescription || '',
    content: content || ''
  });

  useEffect(() => {
    setFormData({
      id: id || '',
      title: title || '',
      author: author || '',
      publishedDate: publishedDate || '',
      shortDescription: shortDescription || '',
      content: content || ''
    });
  }, [id,title, author, publishedDate, shortDescription, content]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published Date</Form.Label>
        <Form.Control
          type="date"
          name="publishedDate"
          value={formData.publishedDate}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Enter short description"
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter content"
          rows={6}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string
};

export default PostForm;
