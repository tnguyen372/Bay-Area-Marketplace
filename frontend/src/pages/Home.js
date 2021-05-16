import React from 'react';
import axios from 'axios';
import './Home.css';
const Home = ({ ws }) => {

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




  // const deleteListing = (entryId) => {
  //   axios.delete(`/deleteListing?entryId=${entryId}`);
  // }



  React.useEffect(() => {
    axios.get('/viewListings')
      .then((res) => {
        updateListings(res.data);
      });

    ws.addEventListener('message', (message) => {
      const parsedData = JSON.parse(message.data);
      updateListings(parsedData);
    })
  }, [ws]);

  return (
    <div>
      <div className="header">
        <h1 className="home-header">Welcome to the Home Page!</h1>
        <br />
        <h1>There are currently {listings.length} listings available</h1>
      </div>
      <div className="container">
        {listings.map((listing, entryId) => (
          <div className="listing" key={entryId}>
            {/* <h4>User's Email: {listing.email}</h4>
            <h4>Item: {listing.title}</h4>
            <h4>Category: {listing.type}</h4>
            <h4>Price: ${listing.price}</h4>
            <h4>Description: {listing.description}</h4> */}
            <h4>User's Email</h4>
            <h4>{listing.email}</h4>
            <h4>Title</h4>
            <h4>{listing.title}</h4>
            <h4>Category</h4>
            <h4>{listing.type}</h4>
            <h4>Price</h4>
            <h4>${listing.price}</h4>
            <h4>Description</h4>
            <h4>{listing.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
