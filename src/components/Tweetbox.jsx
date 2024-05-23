import React from 'react';

const TweetBox = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <textarea className="w-full bg-gray-100 p-2 rounded-lg" placeholder="So tell us...."></textarea>
      <div className="flex justify-end mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Post</button>
      </div>
    </div>
  );
};

export default TweetBox;
