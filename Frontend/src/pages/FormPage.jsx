import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../Styles/FormPage.css'; // Import your custom CSS
import background1 from '../assets/images/Trees.svg';
import background2 from '../assets/images/Clouds and sun.svg';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    trees: '',
    plantedOnBehalf: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if all required fields are filled
    const allFieldsFilled = Object.values(formData).every((field) => field.trim() !== '');

    if (allFieldsFilled) {
      console.log('Successfully Submitted');
      navigate('/popup');

    } else {
      console.log('Please fill out all required fields');
    }
  };

  return (
    <div className="form-page-container">
      <img src={background2} className="back2" alt="Background Top" />
      <div className="form-card">
        <h3>Fill out this form</h3>
        <p>Our team will reach out to you to help with your tree plantation</p>
        <form className="form-fields" onSubmit={handleSubmitClick}>
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
          <TextField
            fullWidth
            label="Phone number"
            variant="outlined"
            margin="normal"
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            margin="normal"
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
          <TextField
            fullWidth
            label="How many trees you want to plant?"
            type="number"
            variant="outlined"
            margin="normal"
            required
            name="trees"
            value={formData.trees}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
          <TextField
            fullWidth
            label="Name to be planted on behalf of?"
            variant="outlined"
            margin="normal"
            required
            name="plantedOnBehalf"
            value={formData.plantedOnBehalf}
            onChange={handleChange}
            className="custom-textfield"
            InputProps={{ style: { height: '48px', alignItems: 'center' } }}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </form>
        <Button
          style={{ marginTop: '35px', fontSize: '14px', borderRadius: '8px' }}
          type="submit"
          fullWidth
          onClick={()=>navigate('/popup')}
          variant="contained"
          color="primary"
          className="submit-button"
          required
        >
          Submit
        </Button>
      </div>
      <img src={background1} className="back1" alt="Background Bottom" />
    </div>
  );
};

export default FormPage;
