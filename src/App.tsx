import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TreatPage from './pages/TreatPage';
import TrickPage from './pages/TrickPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={
          <div className="h-[100dvh] bg-gradient-to-b from-black via-purple-950 to-black text-orange-100 flex items-center justify-center">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-6xl font-horror text-orange-500 filter drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                Choose Your Fate
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/treat"
                  className="px-8 py-4 text-2xl font-horror bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  🍬 Treat
                </Link>
                <Link
                  to="/trick"
                  className="px-8 py-4 text-2xl font-horror bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  👻 Trick
                </Link>
              </div>
            </div>
          </div>
        } />
        <Route path="/treat" element={<TreatPage />} />
        <Route path="/trick" element={<TrickPage />} />
      </Route>
    </Routes>
  );
}

export default App;