import React, { useState, useEffect } from 'react';
import { Header, Sidebar, Tweet, Tweetbox } from '../../components';

const Feed = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    // Obtener el usuario actual del localStorage y quitar las comillas si existe
    const user = localStorage.getItem('user');
    if (user !== null) {
      const currentUser = user.replace(/^"(.*)"$/, '$1');
      console.log('Usuario actual:', currentUser);
      setCurrentUser(currentUser);
    }
  }, []);

  const fetchTweets = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api-proyecto-twitter.vercel.app/home', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching tweets');
      }

      const data = await response.json();
      console.log('Respuesta de la API:', data);

      // Almacenar los tweets con el ID y la verificación de usuario
      const updatedTweets = data.map(tweet => ({
        ...tweet,
        id: tweet._id,
        verificacion: tweet.user.user === currentUser,
      }));

      setTweets(updatedTweets);
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, [currentUser]); // Realizar la solicitud de tweets cada vez que currentUser cambie

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTweetCreated = () => {
    // Actualizar los tweets después de crear uno nuevo
    fetchTweets();
  };

  return (
    <div className="bg-[#151618] min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="container mx-auto mt-4 pt-16 flex flex-col">
        <section className="w-full md:w-3/4 p-4 space-y-4 overflow-y-auto">
          {error && <p className="text-red-500">{error}</p>}
          {tweets.slice().reverse().map((tweet, index) => (
            <Tweet 
              key={index} 
              user={tweet.user.user} 
              username={tweet.user.user} 
              content={tweet.content} 
              tweetId={tweet.id} 
              verificacion={tweet.verificacion} // Agregar la verificación de usuario
            />
          ))}
        </section>
        <Tweetbox onTweetCreated={handleTweetCreated} />
      </main>
    </div>
  );
};

export default Feed;
