import React, { useState, useEffect } from 'react';
import { Header, Sidebar, Tweet } from '../../components';

const Feed = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const token = document.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        const response = await fetch('https://api-proyecto-twitter.vercel.app/home', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Error fetching tweets');
        }

        const data = await response.json();
        setTweets(data);
      } catch (error) {
        console.error('Error fetching tweets:', error);
        setError(error.message);
      }
    };

    fetchTweets();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#151618] min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="container mx-auto mt-4 pt-16 flex flex-col">
        <section className="w-full md:w-3/4 p-4 space-y-4 overflow-y-auto">
          {error && <p className="text-red-500">{error}</p>}
          {tweets.map((tweet, index) => (
            <Tweet key={index} user={tweet.user.user} username={tweet.user.user} content={tweet.content} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Feed;
