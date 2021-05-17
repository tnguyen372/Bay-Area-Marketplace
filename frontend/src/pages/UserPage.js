import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './UserPage.css';

const UserPage = ({ ws }) => {
    
  const [email, setEmail] = React.useState('');
  const [inquiry, updateInquiries] = React.useState([]);
  
  // Fetch all the currently available inquiries
  const fetchInquiries = () => {
    console.log(email);
    const body = { email : email };
    axios.get('/user', body)
      .then((res) => {
        console.log(res.data);
        //alert('You currently have no inquiries available :(');
        
        
        updateInquiries(res.data);
        
      })
      .catch((err) => console.log(err));
  } 

  React.useEffect(() => {

    ws.addEventListener('message', (message) => {
      const parsedData = JSON.parse(message.data);
      updateInquiries(parsedData);
    });
  }, [ws]);

  return (
    <div>
        <h1>User Page</h1>
        <br />
        <div className="inquiry">
        <h3><label>Check your inquiries by submitting your email here: </label></h3>
        <input type="text" value={email} placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}></input>
        <Button id="button" type="submit" onClick={fetchInquiries}>Check Inquiries</Button>
        </div>
        <div className="inquiry-container">
        {/* Display list of inquiries here */}
          {inquiry.map((inquiry, email) => (
          <div className="inquiry-list" key={email}>
            <h4>User's Email</h4>
            <h4 className="inquiry-element">{email}</h4>
            <h4>Message</h4>
            <h4 className="inquiry-element">{inquiry.inquiryMessage}</h4>
          </div>
          ))}
        </div>
    </div>
  );
};

export default UserPage;