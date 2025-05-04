import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import PostAdd from './components/pages/PostAdd';
import PostEdit from './components/pages/PostEdit';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Categories from './components/pages/Categories'
import CategoryPost from './components/pages/CategoryPost';

const App = () => {
  return (
    <Container>
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/category/:id" element={<CategoryPost/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>

    </Container>

  );
};

export default App;
