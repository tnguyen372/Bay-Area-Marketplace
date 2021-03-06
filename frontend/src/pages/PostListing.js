import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './PostListing.css';

const PostListing = ({ ws }) => {
  
    const [email, setEmail] = React.useState('');  
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');

    // Submit a listing

    const createListing = (e) => {
        const listing = {
            email: email, 
            title: title,
            type: type,
            price: price,
            description: description
        };
        e.preventDefault();
        axios.post('/postListing', listing)
        .then(alert('Your listing was submitted!'))
        .catch((err) => {
            alert('Error occurred with listing submission');
            console.log(err);
        });
        
        // Empty the input fields after creating a listing  
        setEmail('');   
        setTitle('');
        setType('');
        setPrice('');
        setDescription('');
    };
    
    return (
        <div id="post-container">
        <h1>What would you like to post?</h1>
            <div id="form-container">
                {/*User enters data here*/}
                <Form id="form">
                    <Form.Group as={Row} controlId="input-email" id="form-item">
                        <Form.Label column sm={2} id="label">
                        Email Address
                        </Form.Label>
                        <Col sm={3}>
                        <Form.Control 
                            type="email" 
                            value={email}
                            placeholder="Email"  
                            onChange={(event) => setEmail(event.target.value)}  
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="input-title" id="form-item">
                        <Form.Label column sm={2} id="label">
                        Title
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control 
                                type="text" 
                                value={title}
                                placeholder="Title"  
                                onChange={(event) => setTitle(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="input-type" id="form-item">
                        <Form.Label column sm={2} id="label">
                        Category
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control 
                                type="text" 
                                value={type}
                                placeholder="Category Type" 
                                onChange={(event) => setType(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="input-price" id="form-item">
                        <Form.Label column sm={2} id="label">
                        Price
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control 
                                type="number"
                                step="0.01"
                                min="0.00" 
                                value={price}
                                placeholder="Selling Price" 
                                onChange={(event) => setPrice(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="input-description" id="form-item">
                        <Form.Label column sm={2} id="label">
                        Description
                        </Form.Label>
                        <Col sm={3}>
                            <Form.Control 
                                as="textarea" 
                                value={description}
                                placeholder="Add a description of what you're selling!" 
                                onChange={(event) => setDescription(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} id="form-item">
                        <Form.Label column sm={2} id="label">
                        </Form.Label>
                        <Col sm={3}>
                        <Button onClick={createListing}>Create Listing</Button>
                        </Col>
                    </Form.Group>
            </Form>    
            </div>
        </div>
    
    );
};

export default PostListing;