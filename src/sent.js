const MessageStore = require("./message_store.js");

const Sent = {
  render: () => {
    let ul = document.createElement("ul");
    ul.className = "messages";
    let sent_messages = MessageStore.getSentMessages();
    for(let i = 0; i < sent_messages.length; i++){
      let new_dom = Sent.renderMessage(sent_messages[i]);
      ul.appendChild(new_dom);
    }
    return ul;
  },

  renderMessage: (message) => {
    let new_li = document.createElement("li");
    new_li.className = "message";
    new_li.innerHTML = `
    <span class="to">To: ${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `;
    return new_li;
  }
}

module.exports = Sent;
