import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Message from '../Message';
import Compose from '@components/NoteBox/Compose';
import { useSelector } from 'react-redux';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MessageList = (props) => {
  const userId = useSelector((state) => state.auth.user.user_id);
  const { showMessage, setShowMessage, partner, list, host, sendToMessage, roomId, nickName } = props;
  const [inputMessage, setInputMessage] = useState('');

  const handleClose = () => {
    setShowMessage(false);
  };

  const sendMessages = () => {
    if (inputMessage.length === 0 || inputMessage === undefined) return;
    sendToMessage(userId, partner, roomId, inputMessage, nickName);
    setInputMessage('');
  };

  const renderMessages = () => {
    let i = 0;
    let messageCount = list.length;
    let tmpMessages = [];

    while (i < messageCount) {
      let current = list[i];

      tmpMessages.push(<Message key={i} data={current} />);

      i += 1;
    }

    return tmpMessages;
  };

  return (
    <Dialog fullScreen open={showMessage} TransitionComponent={Transition}>
      <div>
        <button onClick={handleClose}>나가기</button>

        <div style={{ paddingBottom: '50px' }}>{renderMessages()}</div>

        <Compose
          host={host}
          name={partner}
          setInputMessage={setInputMessage}
          sendMessages={sendMessages}
          inputMessage={inputMessage}
        />
      </div>
    </Dialog>
  );
};

export default MessageList;
