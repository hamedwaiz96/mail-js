const MessageStore = require('./message_store.js');

const Compose = {
  render: () => {
    let new_div = document.createElement("div");
    new_div.className = "new-message";
    new_div.innerHTML = Compose.renderForm();
    new_div.addEventListener('change', (event) => {
      let change_name = event.target.name;
      let change_value = event.target.value;
      MessageStore.updateDraftField(change_name, change_value);
    });
    new_div.addEventListener("submit", (e) => {
      e.preventDefault();
      MessageStore.sendDraft();
      window.location.hash = "inbox";
    })
    return new_div;
  },

  renderForm: () => {
    let draft = MessageStore.getDraftMessage();
    let form = `
    <p class='new-message-header'>New Message</p>
    <form class='compose-form'>
      <input placeholder='Recipient' name='to' type='text' value='${draft.to}'>
      <input placeholder='Subject' name='subject' type='text' value='${draft.subject}'>
      <textarea name='body' rows='20'>${draft.body}</textarea>
      <button type='submit' class='btn btn-primary submit-message'>Send</button>
    </form>
    `;
    return form;
  }
}

module.exports = Compose;
