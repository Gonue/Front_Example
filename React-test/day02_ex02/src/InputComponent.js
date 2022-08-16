import { useState } from "react";
import axios from 'axios';

function InputComponent(props) {
    // console.log(props);
    // console.log(props.items);
    const [phoneList, setPhoneList] = useState(props.items);
    const [no, setNo] = useState(5);
    const [name, setName] = useState("추가사람1");
    const [phone, setPhone] = useState("010-1111-5555");
    const [email, setEmail] = useState("bread5@naver.com");

    function appendData() {
        setNo(no+1);
        console.log(no);
        let newData = {no, name, phone, email};
        let newDataList = [...props.items, newData];
        setPhoneList(newDataList);
        axios.get(`http://localhost:5000/phone/input?no=${no}&name=${name}&phone=${phone}&email=${email}`).then(function(response) {
            setPhoneList(response.data);
        })
    }
    return (
        <div style={{
            display:"flex",
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            margin : 30,
            }}>
            이름 : <input type="text" value={name} onChange={e=>setName(e.currentTarget.value)} />
            전화번호 : <input type="text" value={phone} onChange={e=>setPhone(e.currentTarget.value)} />
            이메일 : <input type="text" value={email} onChange={e=>setEmail(e.currentTarget.value)} />
            <button style={{margin : 20}}onClick={()=> {
                appendData();
            }}>등록</button>
        </div>

        
    )
}


export default InputComponent;