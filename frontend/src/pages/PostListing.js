import React from 'react';
import axios from 'axios';

const PostListing = ({ ws }) => {
  
  const [email, setEmail] = React.useState('');  
  const [title, setTitle] = React.useState('');
  const [type, setType] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [listings, updateListings] = React.useState([]);
  
  const inputEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const inputTitle = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const inputType = (event) => {
    const type = event.target.value;
    setType(type);
  };

  const inputPrice = (event) => {
    const price = event.target.value;
    setPrice(price);
  };

  const inputDescription = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

//   //Submit a listing
//   const createListing = () => {
//     const listing = {
//       title: title,
//       type: type,
//       price: price,
//       description: description
//     };
//     axios.post('/api/createListing', listing)
//       .then(viewListings); 
//     setTitle('');
//     setType('');
//     setPrice('');
//     setDescription('');
//   };

//   const viewListings = () => {
//     axios.get('/api/viewListings')
//       .then((res) => {
//         updateListings(res.data);
//       });
//   };

//   const deleteListing = () => {
//     axios.delete('/api/deleteListing')
//       .then(viewListings);
      
//   };
    return (
    <div>
      <h1>What would you like to post?</h1>
        <div>
            <div className="create-listing">
                {/* Listing Input Fields */}
                <label>Email Address: </label>
                <input id="input-email" value={email} onChange={inputEmail}/>
                <br />
                <br />
                <label>Title: </label>
                <input id="input-title" value={title} onChange={inputTitle} />
                <br />
                <br />
                <label>Type: </label>
                <input id="input-type" value={type} onChange={inputType} />
                <br />
                <br />
                <label>Price: </label>
                <input id="input-price" value={price} onChange={inputPrice} />
                <br />
                <br />
                <label>Description: </label>
                <input id="input-description" value={description} onChange={inputDescription} />
                <br />
                <br />
                <button id="submit" >Create Listing</button>
            </div>
        </div>
    </div>
    
  );
};

export default PostListing;