import { useState } from 'react'
import Collection from './assets/component/Monthly/Collection';
import Navbar from './assets/component/Navbar/Navbar';
import Single from './assets/component/Single/Single'

function App() {
  const [mainStatus, setStatus] = useState(false);

  function handleChangeSite() {
    setStatus(!mainStatus);
  }

  let page;

  if (mainStatus) {
    page = <Single more={handleChangeSite}/>;
  }
  else {
    page = <Collection more={handleChangeSite}/>;
  }

  return (
    <>
      <Navbar />
      {page}
    </>
  )
}

export default App
