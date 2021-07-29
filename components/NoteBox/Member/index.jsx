import React, { useState, useEffect, useCallback } from 'react';
import { Container, Top, Bottom } from '@components/NoteBox/Member/styles';
import { useSelector, useDispatch } from 'react-redux';
import formatDate from '@utils/formatDate';
import MessageList from '../MessageList';
import apiController from '@apis/apiController';
import { chatList } from '@reducers/conversation';

const Member = ({ partner, host, roomId, nickName, sendToMessage }) => {
  const data = useSelector((state) => state.conversation);
  const conversationList = data[partner][data[partner].length - 1];

  const dispatch = useDispatch();

  useEffect(() => {
    getChatList();
  }, []);

  const getChatList = useCallback(() => {
    apiController({
      url: `/users/chats/detail/${roomId}`,
      method: 'get',
    }).then((res) => {
      // console.log(res.data.data);
      for (const key in res.data.data) {
        let params = {
          the_other_user_id: partner,
          nick_name: res.data.data[key].send_nick_name,
          content: res.data.data[key].content,
          send_at: res.data.data[key].send_at,
          message_room_id: roomId,
        };

        dispatch(
          chatList({
            partner: partner,
            list: params,
          }),
        );
      }
    });
  }, [partner, roomId, nickName]);

  const [showMessage, setShowMessage] = useState(false);

  const openMessage = () => {
    setShowMessage(true);
  };

  return (
    <div>
      <Container onClick={openMessage}>
        <Top>
          <h5>{conversationList.nick_name}</h5>
          <span>{formatDate(conversationList.send_at)}</span>
        </Top>
        <Bottom>{conversationList.content}</Bottom>
      </Container>
      <MessageList
        showMessage={showMessage}
        setShowMessage={setShowMessage}
        partner={partner}
        host={host}
        list={data[partner]}
        sendToMessage={sendToMessage}
        roomId={roomId}
        nickName={nickName}
      />
    </div>
  );
};

export default Member;
