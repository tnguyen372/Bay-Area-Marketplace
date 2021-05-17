import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './UserPage.css';

const UserPage = ({ ws }) => {

  const [email, setEmail] = React.useState('');
  const [listings, updateListings] = React.useState([]);

  // Fetch all the currently available inquiries
  const fetchFilteredListings = () => {

    axios.get('/user', { params: { email: email } })
      .then((res) => {
        if(res.data.length === 0){
          alert('There are no listings under the given email');
        } else {
          updateListings(res.data);
        }   
      })
      .catch((err) => console.log(err));
  }

  function deleteListing(entryId, e) {
    axios.delete(`/deleteListing?entryId=${entryId}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        updateListings(listings.filter(listing => listing.entryId !== entryId));
      })
      .catch((err) => console.log(err));

  }

  React.useEffect(() => {

    ws.addEventListener('message', (message) => {
      const parsedData = JSON.parse(message.data);
      updateListings(parsedData);
    });
  }, [ws]);

  return (
    <div>
      <h1>User Page</h1>
      <br />
      <div className="inquiry">
        <h3><label>Check your inquiries by submitting your email here: </label></h3>
        <input type="text" value={email} placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}></input>
        <Button id="button" onClick={fetchFilteredListings}>Check Inquiries</Button>
      </div>
      <div id="container">
        {listings.map((listing, entryId) => (
          <div className="listing" key={entryId}>
            <h4>User's Email</h4>
            <h4 className="listing-element">{listing.email}</h4>
            <h4>Title</h4>
            <h4 className="listing-element">{listing.title}</h4>
            <h4>Category</h4>
            <h4 className="listing-element">{listing.type}</h4>
            <h4>Price</h4>
            <h4 className="listing-element">${listing.price}</h4>
            <h4>Description</h4>
            <h4 className="listing-element">{listing.description}</h4>
            <Button id="button" onClick={(e) => deleteListing(listing.entryId, e)}>Delete Listing</Button>

          </div>
        ))}
      </div>

      {/* <div className="inquiry-container">
  
          {inquiry.map((inquiry, email) => (
          <div className="inquiry-list" key={email}>
            <h4>User's Email</h4>
            <h4 className="inquiry-element">{email}</h4>
            <h4>Message</h4>
            <h4 className="inquiry-element">{inquiry.inquiryMessage}</h4>
          </div>
          ))}
        </div> */}
    </div>
  );
};

export default UserPage;