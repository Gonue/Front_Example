import './App.css';
import InputComponent from './InputComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PrintComponent from './PrintComponent';

function App() {

  const [phoneList, setPhoneList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/phone/list").then(function(response) {
      // console.log("서버로부터 응답 : " + response.data);
      setPhoneList(response.data);
    })
  })


  return (
    <>
      <div style={{
      display:"flex",
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'greenyellow'
      }}><h1>전화번호부</h1></div>
      <InputComponent items={phoneList} />
      <PrintComponent items={phoneList} />
    </>
  );
}

export default App;