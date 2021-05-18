import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './UserPage.css';

const UserPage = ({ ws }) => {

  const [email, setEmail] = React.useState('');
  const [listings, updateListings] = React.useState([]);
  //const [clicked, setClicked] = React.useState(false);

  // Fetch all the currently available inquiries
  const fetchFilteredListings = () => {

    axios.get('/user', { params: { email: email } })
      .then((res) => {
        console.log(res.data);
        if (res.data.length === 0) {
          alert('There are no listings under the given email');
        } else {
          updateListings(res.data);
        }
      })
      .catch((err) => console.log(err));
  }

  function deleteListing(entryId, e) {
    axios.delete(`/deleteListing?entryId=${entryId}`)
      .then(fetchFilteredListings())
      .catch((err) => console.log(err));
  }

  // React.useEffect(() => {

  //   ws.addEventListener('message', (message) => {
  //     const parsedData = JSON.parse(message.data);
  //     console.log("RECEIVED INQUIRY UPDATE!");
  //     updateListings(parsedData);
  //   });
  // }, [ws]);

  return (
    <div>
      <h1>User Page</h1>
      <br />
      <div className="inquiry-page">
        <h3><label>Check your inquiries by submitting your email here: </label></h3>
        <input type="text" value={email} placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}></input>
        <Button id="button" onClick={fetchFilteredListings}>Check Inquiries</Button>
      </div>
      <div id="user-container">
        {listings.map((listing, entryId) => (
          <div className="user-listing-container" key={entryId}>
            <div className="user-listing-fields">
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
            </div>
            <Button id="button" onClick={(e) => deleteListing(listing.entryId, e)}>Delete Listing</Button>
            <h4>Inquiries({listing.inquiries.length-1}):</h4>
            <div className="inquiries-container">
              {listing.inquiries.map((inquiry, i) => (
                <div className="inquiry" key={i}>
                  <p><strong>{inquiry.inquiryEmail}</strong></p>
                  <p>{inquiry.inquiryMessage}</p>
                </div>
              ))}
            </div>
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