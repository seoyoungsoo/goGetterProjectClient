import React from 'react';

const Message = (props) => {
  const { data } = props;
  return (
    <div>
      <div>
        <p>{data.nick_name}</p>
        <p>{data.send_at}</p>
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default Message;
