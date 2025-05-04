import { useSelector } from 'react-redux';
import { getAllPosts } from '../../postsRedux.js'
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PostSummary from '../features/PostSummary.js';

const Home = () => {
  const posts = useSelector(getAllPosts);

  return (
    <div>
      <h1 className="my-4">All Posts</h1>

      <div className="d-flex justify-content-end">
        <Button as={Link} to="/post/add" variant="outline-info" className="mb-3">Add Posts</Button>
      </div>
      <PostSummary posts={posts}/>


    </div>
  );
};

export default Home;
