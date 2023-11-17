import { useState } from 'react'
import './App.css'
import Collection from './assets/component/Monthly/Collection';

function App() {
  const [mainStatus, setStatus] = useState(true);

  let page;

  if (mainStatus) {
    page = <Single />;
  }
  else {
    page = <Collection />;
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  )
}

export default App
