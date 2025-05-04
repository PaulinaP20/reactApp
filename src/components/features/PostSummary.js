import React from 'react';
import {Row, Card, Button, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostSummary =({posts}) => {

    return (
        <Row>
        {posts.map(post => (
          <Col key={post.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p><strong>Author:</strong> {post.author}</p>
                    <p><strong>Published:</strong> {post.publishedDate}</p>
                    <p><strong>Category:</strong> {post.category}</p>
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
    )
}

export default PostSummary;