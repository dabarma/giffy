import React from 'react';
import { Route } from 'wouter';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';


function App() {
  return (
    <StaticContext.Provider value={{
      name: 'David'
    }}>
      <div className="App">
        <section className="App-content">
          <h1>Giffy</h1>
          <GifsContextProvider>
            <Route path="/" component={Home}></Route>
            <Route path="/gif/:id" component={Detail}></Route>
            <Route path="/search/:keyword" component={SearchResults}></Route>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
