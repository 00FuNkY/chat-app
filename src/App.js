import React from 'react';

import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Contact name="Youtube Tutorial" avatar="https://randomuser.me/api/portraits/men/69.jpg" Online />
      <Contact name="Middle Age" avatar="https://randomuser.me/api/portraits/women/10.jpg" />
      <Contact name="Barack Obama" avatar="https://images-na.ssl-images-amazon.com/images/I/511112vA1iL._AC_UX466_.jpg" Online/>
    </div>
  );
}

export default App;
