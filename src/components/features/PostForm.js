import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useSelector} from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-quill-new/dist/quill.snow.css';
import dateToStr from '../../utils/DateToStr.js';
import { useForm } from "react-hook-form";
import { getAllCategories } from '../../categoriesRedux.js'

const PostForm = ({ action, actionText, id, title, author, publishedDate, shortDescription, content, category }) => {

  const categories=useSelector(getAllCategories);
  console.log(categories);

  const {
    register,
    handleSubmit: validate,
    formState: { errors }
  } = useForm();

  const [formData, setFormData] = useState({
    id: id || '',
    title: title || '',
    author: author || '',
    publishedDate: publishedDate ? new Date(publishedDate) : '',
    shortDescription: shortDescription || '',
    content: content || '',
    category: category || ''
  });

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

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

  const handleSubmit = () => {
    const hasContentError = !formData.content || formData.content === '<p><br></p>';
    const hasDateError = !formData.publishedDate;

    setContentError(hasContentError);
    setDateError(hasDateError);

    if (!hasContentError && !hasDateError) {
      const preparedData = {
        ...formData,
        publishedDate: dateToStr(formData.publishedDate)
      };
      action(preparedData);
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)} className="p-4 border rounded shadow-sm">
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          {...register("title", { required: true, minLength: 4 })}
          value={formData.title}
          onChange={(e) => handleChange(e.target.value, 'title')}
        />
        {errors.title?.type === 'required' && (
          <small className="d-block form-text text-danger mt-2">Title is required</small>
        )}
        {errors.title?.type === 'minLength' && (
          <small className="d-block form-text text-danger mt-2">Title must be at least 4 characters</small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          {...register("author", { required: true, minLength: 4 })}
          value={formData.author}
          onChange={(e) => handleChange(e.target.value, 'author')}
        />
        {errors.author?.type === 'required' && (
          <small className="d-block form-text text-danger mt-2">Author is required</small>
        )}
        {errors.author?.type === 'minLength' && (
          <small className="d-block form-text text-danger mt-2">Author must be at least 4 characters</small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublishedDate">
        <Form.Label>Published Date</Form.Label>
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
        {dateError && (
          <small className="d-block form-text text-danger mt-2">Published date is required</small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control
        as="select"
        {...register("category", {required:true})}
        value={formData.category}
        onChange={(e)=>handleChange(e.target.value, 'category')}>
        <option value="">Select Category...</option>
        {categories.map((category)=> (
          <option key={category.id} value={category.id}>{category.label}</option>
        ))}
        </Form.Control>
        {errors.category && (<small className="d-block form-text text-danger mt-2">Category is required</small>)}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formShortDescription">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter short description"
          rows={3}
          {...register("shortDescription", { required: true, minLength: 20 })}
          value={formData.shortDescription}
          onChange={(e) => handleChange(e.target.value, 'shortDescription')}
        />
        {errors.shortDescription?.type === 'required' && (
          <small className="d-block form-text text-danger mt-2">Short description is required</small>
        )}
        {errors.shortDescription?.type === 'minLength' && (
          <small className="d-block form-text text-danger mt-2">Must be at least 20 characters</small>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Content</Form.Label>
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(value) => handleChange(value, 'content')}
        />
        {contentError && (
          <small className="d-block form-text text-danger mt-2">Content is required</small>
        )}
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
