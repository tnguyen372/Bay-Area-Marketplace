import React from 'react';
import axios from 'axios';

const PostListing = ({ ws }) => {
  
    const [email, setEmail] = React.useState('');  
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [listings, updateListings] = React.useState([
        { 
            entryId: '',
            email: '', 
            title: '', 
            type: '', 
            price: 0.00, 
            description: ''
        }
    ]);
    
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

        // Empty the input fields after creating a listing  
        setEmail('');   
        setTitle('');
        setType('');
        setPrice('');
        setDescription('');
    };

    // function viewListings () {
    //     axios.get('/viewListings')
    //       .then((res) => {
    //         updateListings(res.data);
    //       });
    //   }

    // const deleteListing = (entryId) => {
    //     // Temporarily store the filtered listing
    //     // const updatedListing = listings.filter(listing => listing.id !== id);
    //     // updateListings(updatedListing);
    //     axios.delete('/deleteListing', { data: {entryId: {entryId}} })
    //       .then(viewListings);
    // };

    // React.useEffect(() => {
    //     console.log('use effect ran');

    //     ws.addEventListener('listing', (listings) => {
    //         const parsedData = JSON.parse(listings.data);
    //         updateListings(parsedData.listing);
    //     })
    // }, [ws]);

    return (
        <div>
        <h1>What would you like to post?</h1>
            <div>
                <form>
                    {/* Listing Input Fields */}
                    <label>Email Address: </label>
                    <input 
                        id="input-email"
                        type="text"
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
                    <button id="submit" onClick={createListing}>Create Listing</button>
                </form>
                <div>
                    <h2>Here are your posts: </h2>
                    {listings.map((listing) => (
                        <div className="listing" key={listing.entryId}>
                        <h4>Email: {listing.email}</h4>
                        <h4>Item: {listing.title}</h4>
                        <h4>Category: {listing.type}</h4>
                        <h4>Price: ${listing.price}</h4>
                        <h4>Description: {listing.description}</h4>
                        <button >Delete Listing</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
  );
};

export default PostListing;