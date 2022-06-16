import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import InvoiceList from './components/InvoiceList';
import InvoiceView from './components/pages/InvoiceView';
import Navbar from './components/Navbar';
import { InvoiceProvider } from './context/InvoiceContext';

const App = () => {
  return (
    <InvoiceProvider>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <div className='container'>
                  <Navbar />
                  <InvoiceList />
                </div>
              </>
            }
          />

          <Route
            path='/invoice-view/:id'
            element={
              <>
                <InvoiceView />
                <Navbar />
              </>
            }
          />
        </Routes>
      </Router>
    </InvoiceProvider>
  );
};

export default App;
