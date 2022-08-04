import { useState } from 'react';

// const nodeMailer = require('nodemailer');

// const mailPoster = nodeMailer.createTransport({
//     service:'naver',
//     host:'smtp.naver.com',
//     port:587,
//     auth:{
//         user:'breadmaster@naver.com',
//         pass:'tpwhddhxkr5477!'
//     }
// });

// const mailOpt = (user_data, title, contents) => {
//     const mailOptions = {
//         from : 'breadmaster@naver.com',
//         to : user_data,
//         subject: title,
//         text: contents
//     };

//     return mailOptions;
// }

// const sendMail = (mailOption) => {
//     console.log("메일 전송");
// }

function PhoneItem(props) {
    // console.log(props.list);
    const [{no, name, phone, email}] = useState(props.item);

    return (<li>
        {no}. 
        {name} / {phone} / {email} /
    </li>)
}

export default PhoneItem;