import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';
import { removePost } from '../../postsRedux.js';
import {useState, useEffect} from 'react';

const Post = () => {
    const { id } = useParams();

    const post=useSelector(state=> state.posts.find(post=>post.id===id));

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      if (!post) {
        navigate('/');
      }
    }, [post, navigate]);

    if (!post) return null;


    const handleDelete = () => {
      dispatch(removePost(id));
      setShowModal(false);
      navigate('/');
    }

    return (
      <Container className="mt-4">
      <Card className="shadow-lg w-50 mx-auto">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h2>{post.title}</h2>
                <p><strong>Author:</strong> {post.author}</p>
                <p><strong>Published:</strong> {post.publishedDate}</p>
                <p><strong>Category:</strong> {post.category}</p>

                <p>{post.shortDescription}</p>
            </div>
            <div>
              <Button
                variant="primary"
                onClick={() => navigate(`/post/edit/${post.id}`)}
                className="ms-2"
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="ms-2"
                onClick={()=>setShowModal(true)}
              >
                Delete
              </Button>
            </div>
          </div>
          <Card.Text className="mt-3">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={()=>setShowModal(false)}>

        <ModalHeader closeButton>
          <ModalTitle>Are you sure?</ModalTitle>
        </ModalHeader>

        <ModalBody>Are you sure you want to delete this post?</ModalBody>

        <ModalFooter>
          <Button variant="secondary" onClick={()=>setShowModal(false)}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Confirm</Button>
        </ModalFooter>

      </Modal>
    </Container>

    );
  };

export default Post;