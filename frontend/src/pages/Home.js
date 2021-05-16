import React from 'react';
import axios from 'axios';

const Home = () => {
  
  const [listings, updateListings] = React.useState([
    { 
        id: '',
        email: '', 
        title: '', 
        type: '', 
        price: 0.00, 
        description: ''
    }
]);


  
React.useEffect(() => {
  axios.get('/viewListings')
      .then((res) => {
        updateListings(res.data);
      });
}, []);

  return (
    <div id="title-header">
      <h1>Welcome to the Home Page!</h1> 
      <br />
      <h1>All current listings are displayed below</h1>
      
        {listings.map((listing) => (
                <div className="listing" key={listing.id}>
                    <h4>User's Email: {listing.email}</h4>
                    <h4>Item: {listing.title}</h4>
                    <h4>Category: {listing.type}</h4>
                    <h4>Price: ${listing.price}</h4>
                    <h4>Description: {listing.description}</h4>
                </div>
        ))}
    </div>
  );
};

export default Home;
