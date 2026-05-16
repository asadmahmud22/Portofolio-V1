// src/pages/Chat.jsx
import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () => {
  const [user, loading, error] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // load messages
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    return onSnapshot(q, snap => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  const signInWithProvider = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error('Sign in error', err);
    }
  };

  const handleSignOut = () => signOut(auth);

  const sendMessage = async e => {
    e.preventDefault();
    if (!newMessage.trim() || !user) return;
    await addDoc(collection(db, 'messages'), {
      text: newMessage.trim(),
      uid: user.uid,
      author: user.displayName,
      timestamp: serverTimestamp()
    });
    setNewMessage('');
  };

  if (loading) return <p className="p-4 text-center">Loading…</p>;
  if (error)  return <p className="p-4 text-center text-red-400">Error: {error.message}</p>;

  // >>> show login screen if not signed in
  if (!user) {
    return (
      <div className="max-w-6xl flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-10 mx-auto px-4 py-1">
        <h1 className="text-3xl font-bold mb-6">Chat Room</h1>
        <h3 className="text-2xl font-bold mb-2">Masih Proses</h3>
        <p className="text-gray-400 mb-6">
          Please sign in to start. Don&apos;t worry, your data is safe.
        </p>
        <div className="max-w-6xl flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => signInWithProvider(new GoogleAuthProvider())}
            className="flex items-center px-6 py-3 bg-white text-gray-900 rounded shadow hover:shadow-lg transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-6 h-6 mr-3"
            />
            Sign in with Google
          </button>
          <button
            onClick={() => signInWithProvider(new GithubAuthProvider())}
            className="flex items-center px-6 py-3 border border-gray-300 rounded hover:bg-gray-800 transition"
          >
            <img
              src="https://www.svgrepo.com/show/452092/github.svg"
              alt="GitHub"
              className="w-6 h-6 mr-3"
            />
            Sign in with GitHub
          </button>
        </div>
      </div>
    );
  }

  // >>> signed in: show chat
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white max-w-6xl">
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Chat Room</h2>
        <div className="flex items-center space-x-4">
          <span>{user.displayName}</span>
          <button
            onClick={handleSignOut}
            className="px-3 py-1 bg-red-600 rounded"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => {
          const isMe = msg.uid === user.uid;
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs p-3 rounded-lg ${
                isMe ? 'bg-blue-500 text-white' : 'bg-gray-800'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{msg.author}</span>
                  <span className="text-xs text-gray-400">
                    {msg.timestamp?.toDate().toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <p>{msg.text}</p>
              </div>
            </div>
          );
        })}
      </main>

      <form onSubmit={sendMessage} 
      className="flex p-4 border-t border-gray-700"
      >
        <input
          type="text"
          placeholder="Type a message…"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          className="flex-1 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="ml-3 px-6 py-2 bg-green-500 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
