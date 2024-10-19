import { useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    gender: "",
    rating: "",
    comments: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(user);
    setIsFormSubmitted(true);
    setUser({
      fullname: "",
      email: "",
      gender: "",
      rating: "",
      comments: "",
    });
  };

  const handleGoToForm = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div className="container">
      <h1>Customer Feedback Form</h1>
      {!isFormSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name*</label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter your full name"
            name="fullname"
            autoComplete="off"
            required
            onChange={handleChange}
            value={user.fullname}
          />
          <label htmlFor="email">Email*</label>
          <input
            className="input-field"
            type="email"
            placeholder="Enter your email address"
            name="email"
            autoComplete="off"
            required
            onChange={handleChange}
            value={user.email}
          />
          <label htmlFor="rating">Gender*</label>
          <input
            className="radio-btn"
            type="radio"
            name="gender"
            required
            onChange={handleChange}
            value="Male"
            checked={user.gender === "Male"}
          />
          Male
          <input
            className="radio-btn"
            type="radio"
            name="gender"
            required
            onChange={handleChange}
            value="Female"
            checked={user.gender === "Female"}
          />
          Female
          <input
            className="radio-btn"
            type="radio"
            name="gender"
            required
            onChange={handleChange}
            value="Other"
            checked={user.gender === "Other"}
          />
          Other
          <label htmlFor="rating">Rating*</label>
          <select
            className="dropdown"
            name="rating"
            required
            onChange={handleChange}
            value={user.rating}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label htmlFor="comments">Comments</label>
          <textarea
            rows="8"
            cols="30"
            placeholder="Enter your comments here"
            name="comments"
            onChange={handleChange}
            value={user.comments}
          />
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <div className="submitted-data">
          <h4>Thank you for your valuable feedback!</h4>
          <h3>Your Submitted Data:</h3>
          <p>
            <strong>Full Name:</strong> {submittedData.fullname}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Gender:</strong> {submittedData.gender}
          </p>
          <p>
            <strong>Rating:</strong> {submittedData.rating}
          </p>
          <p>
            <strong>Comments:</strong> {submittedData.comments}
          </p>
          <span>
            <strong>Now you can close this window or</strong>
            <button onClick={handleGoToForm} className="form-btn">
              Go to Form
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
