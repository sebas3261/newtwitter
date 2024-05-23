import React, { useState } from 'react';

const TweetBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTweetBox = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#2B2D31] p-4 rounded-t-lg shadow-md">
          <textarea className="w-full bg-[#626467] p-2 rounded-lg" placeholder="So tell us...."></textarea>
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Post</button>
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
