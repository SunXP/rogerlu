import React from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <PostList />
    </div>
  );
}

export default App;
