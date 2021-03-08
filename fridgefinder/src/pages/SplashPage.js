import React from 'react';
import { useSelector } from 'react-redux';


function SplashPage () {

  const makeRequest = async () => {
    let res = await fetch('/backend/app/api/tests')
  }

  return (
    <>
      <h1>
        This is the splash page.
      </h1>
      <button onClick={makeRequest}>Make Request</button>
    </>
  )
}
export default SplashPage;
