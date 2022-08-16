var messageInput = document.querySelector("#messageInput");
        var sendBtn = document.querySelector("#sendBtn");
        var messageBox = document.querySelector("#messageBox");

        const socket = io.connect('http://localhost:3000');
        socket.on('connect', function(data) {
            console.log("서버 소켓과 연결 됨!");
            messageBox.innerHTML += "<br>서버 소켓과 연결되었습니다.";
            
            sendBtn.onclick = function(e) {
                var message = messageInput.value;
                //console.log(message);
                socket.emit('client-message', {sender:'user01', message:message});
            }

            socket.on('news', function(data) {
                //console.log(data);
                console.log(data);
                messageBox.innerHTML += "<br>"+data['sender'] +" : "+ data['message'];
            });
        });