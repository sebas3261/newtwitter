import React from 'react';

const Tweet = ({ user, username, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex space-x-4">
        <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full" />
        <div>
          <h3 className="font-bold">{user}</h3>
          <p className="text-gray-500">@{username}</p>
          <p className="mt-2">{content}</p>
          <div className="flex space-x-4 mt-2 text-gray-500">
            <span>Like</span>
            <span>Reply</span>
            <span>Retweet</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
