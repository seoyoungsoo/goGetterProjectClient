import React, { useCallback, useRef, useState, useEffect } from 'react';
import { Container, Top } from '@components/NoteBox/Detail/styles';
import ChatBox from '@components/NoteBox/Detail/ChatBox';
import ChatList from '@components/NoteBox/Detail/ChatList';
import useInput from '@hooks/useInput';
import apiController from '@apis/apiController';

const Detail = ({ sendToMessage, userId, partner, roomId, nickName }) => {
  const [chat, onChangeChat, setChat] = useInput('');
  const [chatData, setChatData] = useState([]);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log(userId, partner, roomId, chat, nickName);
      // 통신
      sendToMessage(userId, partner, roomId, chat, nickName);
      setChat('');
    },
    [userId, partner, roomId, chat, nickName],
  );

  useEffect(() => {
    apiController({
      url: `users/chats/detail/${roomId}`,
      method: 'get',
    }).then((res) => setChatData(res.data.data));
  }, []);

  return (
    <div>
      <Container>
        <Top>
          <h4>닉네임</h4>
        </Top>
        <ChatList roomId={roomId} chatData={chatData} setChatData={setChatData} />
        <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
      </Container>
    </div>
  );
};

export default Detail;
