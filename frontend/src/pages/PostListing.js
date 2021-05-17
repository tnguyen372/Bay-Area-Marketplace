import React from 'react';
import axios from 'axios';


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
                <form>
                    <label>Email Address: </label>
                    <input 
                        id="input-email"
                        type="email"
                        required 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}/>
                    <br />
                    <br />
                    <label>Title: </label>
                    <input 
                        id="input-title"
                        type="text"
                        required  
                        value={title} 
                        onChange={(event) => setTitle(event.target.value)} />
                    <br />
                    <br />
                    <label>Type: </label>
                    <input 
                        id="input-type"
                        type="text"
                        required 
                        value={type} 
                        onChange={(event) => setType(event.target.value)} />
                    <br />
                    <br />
                    <label>Price: </label>
                    <input 
                        id="input-price"
                        type="number"
                        step="0.01"  // Allows input to include decimal numbers up to 2 decimal places 
                        min="0.00"  // Minimum price is $0.00
                        required 
                        value={price} 
                        onChange={(event) => setPrice(event.target.value)} />
                    <br />
                    <br />
                    <label>Description: </label>
                    <textarea 
                        id="input-description"
                        type="text"
                        required
                        value={description} 
                        onChange={(event) => setDescription(event.target.value)} />
                    <br />
                    <br />
                    <button id="submit" type="submit" onClick={createListing}>Create Listing</button>
                </form>
                <div>
                    <h2>Here are your posts: </h2>
                    
                </div>
            </div>
        </div>
    
  );
};

export default PostListing;