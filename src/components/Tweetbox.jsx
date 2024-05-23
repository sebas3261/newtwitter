import React, { useState } from 'react';
import axios from 'axios';

const TweetBox = ({ onTweetCreated }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState('');

  const toggleTweetBox = () => {
    setIsVisible(!isVisible);
  };

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await axios.post('https://api-proyecto-twitter.vercel.app/tweet', 
      { content }, 
      { headers: { 'Authorization': `Bearer ${token}` } });

      const newTweet = response.data;
      onTweetCreated(newTweet);
      setContent('');
      setIsVisible(false);
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#2B2D31] p-4 rounded-t-lg shadow-md">
          <textarea
            className="w-full bg-[#626467] p-2 rounded-lg"
            placeholder="So tell us...."
            value={content}
            onChange={handleInputChange}
          />
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      )}
      <button
        className="fixed left-4 bottom-4 bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={toggleTweetBox}
      >
        +
      </button>
    </div>
  );
};

export default TweetBox;
