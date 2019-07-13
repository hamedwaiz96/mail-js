const MessageStore = require("./message_store.js");

const Inbox = {
  render: () => {
    let ul = document.createElement("ul");
    ul.className = "messages";
    let inbox_messages = MessageStore.getInboxMessages();
    for(let i = 0; i < inbox_messages.length; i++){
      let new_dom = Inbox.renderMessage(inbox_messages[i]);
      ul.appendChild(new_dom);
    }
    return ul;
  },

  renderMessage: (message) => {
    let new_li = document.createElement("li");
    new_li.className = "message";
    new_li.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `;
    return new_li;
  }
}

module.exports = Inbox;
