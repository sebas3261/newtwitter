import React, { useState } from 'react';
import axios from 'axios';

const Tweet = ({ user, username, content, tweetId, verificacion }) => {
  const [newContent, setNewContent] = useState(content); // Estado para el nuevo contenido del tweet
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar si se está editando el tweet

  const handleDelete = async () => {
    try {
      console.log(tweetId);
      await axios.delete(`https://api-proyecto-twitter.vercel.app/tweets/delete/${tweetId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Tweet eliminado:', tweetId);
      // Aquí puedes actualizar la lista de tweets después de eliminar
    } catch (error) {
      console.error('Error al eliminar el tweet:', error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(`https://api-proyecto-twitter.vercel.app/tweets/edit/${tweetId}`, { content: newContent }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Tweet editado:', tweetId);
      // Aquí puedes actualizar la lista de tweets después de editar
      setIsEditing(false); // Desactivar la edición después de guardar
    } catch (error) {
      console.error('Error al editar el tweet:', error);
    }
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md ${verificacion ? 'border border-green-500' : ''}`}>
      <div className="flex space-x-4">
        <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-full" />
        <div>
          <h3 className="font-bold">{user}</h3>
          <p className="text-gray-500">@{username}</p>
          {isEditing ? (
            <input 
              type="text" 
              value={newContent} 
              onChange={(e) => setNewContent(e.target.value)} 
              className="mt-2 p-2 border border-gray-300 rounded-md" 
            />
          ) : (
            <p className="mt-2">{content}</p>
          )}
          <div className="flex space-x-4 mt-2">
            <button className="text-gray-500">Like</button>
            <button className="text-gray-500">Reply</button>
            <button className="text-gray-500">Retweet</button>
            {verificacion && (
              <>
                <button onClick={handleDelete} className="text-gray-500 hover:text-red-600">
                  Eliminar
                </button>
                {isEditing ? (
                  <button onClick={handleEdit} className="text-gray-500 hover:text-blue-600">
                    Guardar
                  </button>
                ) : (
                  <button onClick={() => setIsEditing(true)} className="text-gray-500 hover:text-blue-600">
                    Editar
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
