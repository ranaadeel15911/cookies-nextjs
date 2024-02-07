'use client'

import axios from "axios";

// import { setCookie, getCookie, getCookies, deleteCookie, hasCookie } from 'cookies-next';
// import { cookies } from 'next/headers';
const Home =  () => {
  // It's not possible to update the cookie in RSC
  //  setCookie("test", "value", { cookies });
  //  deleteCookie('test1', { cookies });
  // cookies().set('name', 'value', { maxAge: 0 })
// console.log(cook)
const handleGet = async()=>{
  console.log('called')
  try {
    const res = await axios.get('/abc')
    console.log(res)
    // router.push('/login')
    alert("Got Successful")
  } catch (error) {
    console.log(error)
  }
}

const DeleteCookie = async()=>{
  try{
  const res = await axios.get('/def')
  console.log(res)
  // router.push('/login')
  alert("Deleted")
} catch (error) {
  console.log(error)
}
}
  return (
    <main>
      <h1>Hello cookies next</h1>
      <button className="bg-white text-red-500 text-2xl m-3" onClick={handleGet}>Make Cookie</button>
      <button className="bg-white text-black text-2xl m-3" onClick={DeleteCookie}>Destroy Cookie</button>
    </main>
  );
};

export default Home;