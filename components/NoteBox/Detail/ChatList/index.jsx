import React, { useEffect, useRef } from 'react';
import { ChatZone } from '@components/NoteBox/Detail/ChatList/styles';
import Scrollbars from 'react-custom-scrollbars';
import Chat from '@components/NoteBox/Detail/Chat';

const ChatList = ({ roomId, chatData, setChatData }) => {
  const chatSections = chatData ? chatData.flat().reverse() : [];

  return (
    <ChatZone>
      <Scrollbars autoHide>
        {chatSections?.map((chat) => (
          <Chat key={chat.send_at} data={chat} />
        ))}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
