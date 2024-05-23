import React, { useState } from 'react';
import { Header, Sidebar, Tweetbox, Tweet } from '../../components';

const Feed = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const tweets = [
    { user: 'User Name', username: 'username', content: 'This is a sample tweet. Lorem ipsum dolor sit amet.' },
    { user: 'User Name', username: 'username', content: 'This is a sample tweet. Lorem ipsum dolor sit amet.' },
  ];

  return (
    <div className="bg-[#151618] min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <main className="container mx-auto mt-4 flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <section className="w-full md:w-3/4 p-4 space-y-4">
          <Tweetbox />
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Feed;
