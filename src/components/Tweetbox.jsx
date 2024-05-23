import React, { useState } from 'react';

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

    const token = localStorage.getItem('token'); // Aseguramos que la clave es 'token'
    console.log('Token:', token); // Añadir esto para depuración

    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const response = await fetch('https://api-proyecto-twitter.vercel.app/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        throw new Error('Error al crear el tweet');
      }

      const newTweet = await response.json();
      onTweetCreated(newTweet); // Notificar al componente padre sobre el nuevo tweet
      setContent(''); // Limpiar el textarea
      setIsVisible(false); // Ocultar el TweetBox
    } catch (error) {
      console.error('Error:', error);
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
