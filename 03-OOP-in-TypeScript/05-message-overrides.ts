class Message {
  send(): string {
    return "Sending message...";
  }
}

class EmailMessage extends Message {
  override send() {
    return "Sending email...";
  }
}

class SMSMessage extends Message {
  override send() {
    return "Sending SMS...";
  }
}

const messages: Message[] = [new Message(), new EmailMessage(), new SMSMessage()];

messages.forEach((msg) => {
  console.log(msg.send());
});