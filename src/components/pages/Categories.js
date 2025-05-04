import React from 'react';
import {useSelector} from 'react-redux';
import {getAllCategories} from '../../categoriesRedux.js';
import {Link} from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';

const Categories = () => {
    const categories = useSelector(getAllCategories);

    return (
        <div>
            <h3 className="my-3">All categories:</h3>
            <ListGroup>
                {categories.map((category) => (
                    <ListGroup.Item key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.label}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default Categories;