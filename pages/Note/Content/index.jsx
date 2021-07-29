import React, { useRef, useState, useCallback, useEffect } from 'react';
import NoteBox from '@components/NoteBox';
import { Container } from '@pages/Note/Content/styles';
import apiController from '@apis/apiController';
import SockJsClient from 'react-stomp';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { insertPartner, insertMessage, receive } from '@reducers/conversation';

const Content = ({ userId }) => {
  const socketRef = useRef(null);
  let topics = ['/topic/' + userId];

  // const [memberList, setMemberList] = useState([]);

  const dispatch = useDispatch();

  const sendToMessage = (senderId, receiverId, roomId, chat, nickName) => {
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

    const reduxParams = {
      the_other_user_id: receiverId,
      nick_name: nickName,
      content: chat,
      send_at: nowTime,
      message_room_id: roomId,
    };
    const socketParams = {
      sender_id: senderId,
      receiver_id: receiverId,
      message_room_id: roomId,
      content: chat,
    };
    socketRef.current.sendMessage('/app/chat/send', JSON.stringify(socketParams));
    dispatch(insertMessage(reduxParams));
  };

  const receiveMessage = (msg) => {
    console.log('receive!' + msg);
    // dispatch(receive(msg));
  };

  // const url = window.location.protocol + '//' + window.location.host + '/chat';

  return (
    <Container>
      <SockJsClient
        url="/chat"
        topics={topics}
        onConnect={() => console.log('onConnect')}
        onDisconnect={() => console.log('onDisconnect')}
        onMessage={(msg) => receiveMessage(msg)}
        ref={socketRef}
      />
      <NoteBox userId={userId} sendToMessage={sendToMessage} />
    </Container>
  );
};

export default Content;
