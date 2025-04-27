import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill-new/dist/quill.snow.css';
import dateToStr from '../../utils/DateToStr.js'

const PostForm = ({ action, actionText, id, title, author, publishedDate, shortDescription, content }) => {
  const [formData, setFormData] = useState({
    id: id || '',
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
      publishedDate: publishedDate ? (typeof publishedDate === 'string' ? new Date(publishedDate) : publishedDate) : '',
      shortDescription: shortDescription || '',
      content: content || ''
    });
  }, [id, title, author, publishedDate, shortDescription, content]);

  const handleChange = (value, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      publishedDate: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const preparedData = {
      ...formData,
      publishedDate: formData.publishedDate ? dateToStr(formData.publishedDate) : '',
    };

    action(preparedData);
  };


  return (
    <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange(e.target.value, 'title')}
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
          onChange={(e) => handleChange(e.target.value, 'author')}
          placeholder="Enter author"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published Date </Form.Label>
        <div className="d-block">
          <DatePicker
          selected={formData.publishedDate}
          onChange={handleDateChange}
          dateFormat="dd.MM.yyyy"
          className="form-control"
        />
      </div>
      <div>
        {formData.publishedDate && dateToStr(formData.publishedDate)}
      </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          name="shortDescription"
          value={formData.shortDescription}
          onChange={(e) => handleChange(e.target.value, 'shortDescription')}
          placeholder="Enter short description"
          rows={3}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(value) => handleChange(value, 'content')}
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
  publishedDate: PropTypes.instanceOf(Date),
  shortDescription: PropTypes.string,
  content: PropTypes.string
};

export default PostForm;
