await transporter.sendMail({
    from: '"Node js" <nodejs@example.com>',
    to: "user@example.com, user@example.com",
    subject: "Attachments",
    text: "This message with attachments.",
    html: "This <i>message</i> with <strong>attachments</strong>.",
    attachments: [
      {filename: 'greetings.txt', path: '/assets/files/'},
      {filename: 'greetings.txt', content: 'Message from file.'},
      {path: 'data:text/plain;base64,QmFzZTY0IG1lc3NhZ2U='},
      {raw: `
        Content-Type: text/plain
        Content-Disposition: attachment;
  
        Message from file.
      `}
    ]
  });
  