import * as React from "react";

export interface ChatWindowProps {}

const ChatWindow: React.SFC<ChatWindowProps> = () => {
  return (
    <div className="chat-window nes-container with-title is-centered">
      <section className="message-list">Message History</section>
    </div>
  );
};

export default ChatWindow;
