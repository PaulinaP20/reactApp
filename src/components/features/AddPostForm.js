import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../postsRedux';
import { Button, Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm =() => {
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit=(e)=> {
        e.preventDefault();

        const payload = {
            id:uuidv4(),
            title,
            shortDescription,
            content,
            author,
            publishedDate
        };

        dispatch(addPost(payload));
        navigate('/');
    }



    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formAuthor" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author's name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPublishedDate" className="mt-3">
          <Form.Label>Published Date</Form.Label>
          <Form.Control
            type="date"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formShortDescription" className="mt-3">
          <Form.Label>Short Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter short description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContent" className="mt-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Add Post
        </Button>
      </Form>
    )


}

export default AddPostForm;