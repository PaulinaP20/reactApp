import { useSelector } from 'react-redux';
import { getAllPosts } from '../../postsRedux.js'
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div>
      <h1 className="my-4">All Posts</h1>

      <div className="d-flex justify-content-end">
        <Button as={Link} to="/post/add" variant="outline-info" className="mb-3">Add Posts</Button>
      </div>

      <Row>
        {posts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Published:</strong> {post.publishedDate}</p>
                    <p>{post.shortDescription}</p>
                    <hr />
                </div>
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
