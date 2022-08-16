import axios from 'axios';
import { useState } from 'react';
import PhoneItem from "./PhoneItem";

function PrintComponent(props) {
    // console.log(props.items);
    const [phoneList, setPhoneList] = useState(props.items);

    function deleteData(no) {
        // console.log(no);

        let idx = props.items.findIndex((obj)=>{
            return no === obj.no;
        });
        
        // console.log(idx);
        const newList = [...props.items];

        newList.splice(idx,1);
        console.log(newList);
        setPhoneList(newList);

        axios.get(`http://localhost:5000/phone/delete?no=${no}`).then(function(response) {
            console.log(response.data);

            setPhoneList(response.data);
        });
    }

    return (
        <ul>
            {props.items.map(function (item, i) {
                return (
                    <>
                    <PhoneItem key={i} item={item} />
                    <button onClick={(event)=>{
                        event.preventDefault();
                        // console.log(item.no);
                        deleteData(item.no);
                    }}>삭제</button>
                    <button onClick={(event)=>{
                        event.preventDefault();
                        // const mailOption = mailOpt('takgeun92@gmail.com', '테스트 발송', '테스트 발송 본문');
                        // sendMail(mailOption);
                    }}>이메일 전송</button>
                    </>
                )
            })}
        </ul>
    )
}

export default PrintComponent;