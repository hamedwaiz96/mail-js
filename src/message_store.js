let messages = {
  sent: [
    {to: "hihow142@gmail.com", from: "hamedw96@gmail.com", subject: "I am a person",
    body: "Hey how's it going man been a long time."
    },
  {
    to: "person@mail.com", subject: "zzz", body: "so booring"
  }
  ],
  inbox: [
    {from: "grandma@mail.com", subject: "Fwd: Fwd: Fwd: Check this out",
        body: "Stay at home mom discovers cure for leg cramps. Doctors hate her"},
    {from: "person@mail.com", subject: "Questionnaire", body: "Take this free quiz win $1000 dollars"}
  ]
}

class Message {
  constructor(from="hamedw96@gmail.com", to="", subject="", body=""){
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.body = body;
  }

}

let messageDraft = new Message();

const MessageStore = {
  getInboxMessages: () => {
    return messages.inbox;
  },
  getSentMessages: () => {
    return messages.sent;
  },
  getDraftMessage: () => {
    return messageDraft;
  },
  updateDraftField: (field, value) => {
    messageDraft[field] = value;
  },
  sendDraft: () => {
    messages.sent.push(messageDraft);
    messageDraft = new Message();
  }
}

module.exports = MessageStore;
