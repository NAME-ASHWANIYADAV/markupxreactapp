import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MarkupXlanding from './markupxlanding';
import NotFoundPage from './404';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={MarkupXlanding} />
        <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default App;

