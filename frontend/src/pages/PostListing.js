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

    const createListing = () => {
        const listing = {
            email: email, 
            title: title,
            type: type,
            price: price,
            description: description

        };

        axios.post('/postListing', listing)
        .catch((err) => console.log(err));
        alert('Your post was submitted!');
        // Empty the input fields after creating a listing  
        setEmail('');   
        setTitle('');
        setType('');
        setPrice('');
        setDescription('');

    };
    



    return (
        <div>
        <h1>What would you like to post?</h1>
            <div>
                {/*User enters data here*/}
                <Form >
                    <Form.Group as={Form.Row} controlId="input-email">
                        <Form.Label column sm={2}>
                        Email Address
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Control 
                            type="email" 
                            value={email}
                            placeholder="Email"  
                            onChange={(event) => setEmail(event.target.value)}  
                        />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Form.Row} controlId="input-title">
                        <Form.Label column sm={2}>
                        Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="text" 
                                value={title}
                                placeholder="Title"  
                                onChange={(event) => setTitle(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="input-type">
                        <Form.Label column sm={2}>
                        Category
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="text" 
                                value={type}
                                placeholder="Category Type" 
                                onChange={(event) => setType(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Form.Row} controlId="input-price">
                        <Form.Label column sm={2}>
                        Price
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type="number"
                                step="0.01"
                                min="0.00" 
                                value={price}
                                placeholder="Price" 
                                onChange={(event) => setPrice(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Form.Row} controlId="input-description">
                        <Form.Label column sm={2}>
                        Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                as="textarea" 
                                value={description}
                                placeholder="Add a description of what you're selling" 
                                onChange={(event) => setDescription(event.target.value)} 
                            />
                        </Col>
                    </Form.Group>
                        <Form.Group as={Form.Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={createListing}>CreateListing</Button>
                        </Col>
                    </Form.Group>
            </Form>
                
            </div>
        </div>
    
    );
};

export default PostListing;