import React, { useState } from 'react';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    schoolName: '',
    schoolAddress: '',
    schoolCity: '',
    schoolState: '',
    schoolPincode: '',
    teacherName: '',
    teacherEmail: '',
    modelType: '',
    participationType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate pincode (6 digits)
    if (!/^\d{6}$/.test(formData.schoolPincode)) {
      alert('Please enter a valid 6-digit pincode.');
      return;
    }

    try {
      const response = await fetch('/api/application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        setFormData({
          studentName: '',
          schoolName: '',
          schoolAddress: '',
          schoolCity: '',
          schoolState: '',
          schoolPincode: '',
          teacherName: '',
          teacherEmail: '',
          modelType: '',
          participationType: ''
        });
      } else {
        alert('Error submitting the application.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Science Day Application Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Render form fields as shown before */}
        {/* Additional code... */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
