import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './Home.css';
const Home = ({ ws }) => {

  const [listings, updateListings] = React.useState([]);
  const [email, setEmail] = React.useState('');
  const [inquiry, setInquiry] = React.useState('');

  const fetchListings = () => {
    axios.get('/viewListings')
      .then((res) => {
        updateListings(res.data);
      })
      .catch((err) => console.log(err));
  }

  const handleInquiry = (id, e) => {

    if (email === "" || inquiry === "") {
      alert("Cannot submit a blank inquiry");
    } else {
      const body = {
        entryId: id,
        inquiryEmail: email,
        inquiryMessage: inquiry
      };

      axios.put('/sendInquiry', body)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setEmail('');
      setInquiry('');
    }
  };

  React.useEffect(() => {

    fetchListings();

    ws.addEventListener('message', (message) => {
      const parsedData = JSON.parse(message.data);
      updateListings(parsedData);
    });
  }, [ws]);

  return (
    <div>
      <div className="home-header">
        <h1>Welcome to the Home Page!</h1>
        <br />
        <h1>There are currently {listings.length} listings available</h1>
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
            <input
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(event) => setEmail(event.target.value)}>
            </input>
            <input
              type="textarea"
              value={inquiry}
              onChange={(event) => setInquiry(event.target.value)}
              placeholder="Make an offer!">
            </input>
            <Button id="button" type="submit" onClick={(e) => handleInquiry(listing.entryId, e)}>Submit Inquiry</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
