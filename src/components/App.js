import React from 'react';
import Dog from './Dog.js';
import Header from './Header.js';


export default function App() {
  return (
    // fragment element because you can only return parents, not 2 siblings
    <> 
    <Header />
    <Dog />
    </>
  );
}
