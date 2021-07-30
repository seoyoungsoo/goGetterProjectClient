import React, { useEffect, useCallback, useState, useRef } from 'react';
import { Container, Content } from '@components/NoteBox/styles';
import Member from '@components/NoteBox/Member';
import moment from 'moment';
import apiController from '@apis/apiController';
import { useSelector, useDispatch } from 'react-redux';
import { insertPartner, insertMessage, receive } from '@reducers/conversation';
import SockJsClient from 'react-stomp';

const NoteBox = ({ userId }) => {
  const socketRef = useRef(null);
  let topics = ['/topic/' + userId];

  const conversationList = useSelector((state) => state.conversation);

  const [memberList, setMemberList] = useState([]);
  const [partner, setPartner] = useState('');
  const [roomId, setRoomId] = useState('');
  const [nickName, setNickName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getConversations();
  }, []);

  const getConversations = useCallback(() => {
    apiController({
      url: `/users/chats/${userId}`,
      method: 'get',
    }).then((res) => {
      if (res.data.message === '조회성공') {
        // console.log(res.data.data);
        setMemberList(res.data.data);
        for (const key in res.data.data) {
          dispatch(
            insertPartner({
              partner: res.data.data[key].the_other_user_id,
              list: [res.data.data[key]],
            }),
          );
        }
      }
    });
  }, [userId]);

  const onClickMember = useCallback((partner, roomId, nickName) => {
    console.log(partner, roomId, nickName);
    setPartner(partner);
    setRoomId(roomId);
    setNickName(nickName);
  }, []);

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
    console.log(msg);
    // dispatch(receive(msg));
  };

  if (!memberList.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container>
        <Content>
          <h4>채팅목록</h4>
          {Object.keys(conversationList).map(
            (key, index) => (
              <Member
                key={key}
                // partner={key}
                host={userId}
                // onClickMember={onClickMember}
                // roomId={conversationList[key][0].message_room_id}
                // nickName={conversationList[key][0].nick_name}
                sendToMessage={sendToMessage}
                partner={memberList[index].the_other_user_id}
                nickName={memberList[index].nick_name}
                roomId={memberList[index].message_room_id}
              />
            ),
            // console.log(conversationList, key, index),
          )}
        </Content>
      </Container>
      <SockJsClient
        url="/chat"
        topics={topics}
        onConnect={() => console.log('onConnect')}
        onDisconnect={() => console.log('onDisconnect')}
        onMessage={(msg) => {
          receiveMessage(msg);
        }}
        ref={socketRef}
      />
    </div>
  );
};

export default NoteBox;
