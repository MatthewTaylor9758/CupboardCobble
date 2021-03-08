import React from 'react';
import { useSelector } from 'react-redux';


function SplashPage () {

  const makeRequest = async () => {
    let res = await fetch('/api/tests')
  }

  const makeOtherRequest = async () => {
    let res = await fetch('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3', {
      method: 'get',
      // mode: '*cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let res2 = await res.json();
    console.log(res2);
  }

  return (
    <>
      <h1>
        This is the splash page.
      </h1>
      <button onClick={makeRequest}>Make My-Proxy Request</button>
      <button onClick={makeOtherRequest}>Make Other-Proxy Request</button>
    </>
  )
}
export default SplashPage;
