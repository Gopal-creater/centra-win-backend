const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
const orderTemplate = require("./templates/orderTemplate");

//The resend api key should be inside env file later-----
const resend = new Resend("re_UYFrFtbF_AHCZKvGJj7QdrPq9xbVmVoon");

const app = express();
const port = 4000;

// Allow CORS requests from your frontend (e.g., localhost:3000)
app.use(
  cors({
    origin: "http://localhost:3000", // Update this with your frontend URL
    methods: ["*"],
  })
);

app.use(express.json()); // For parsing application/json

// Endpoint to send email
app.post("/send-email", async (req, res) => {
  try {
    const { base64content, fileName, subject, data } = req.body;

    const emailRes = await resend.emails.send({
      from: "centra-windows@gopalgautam.ca",
      to: "shresthasony56@gmail.com",
      subject: subject,
      html: orderTemplate({ data: data }),
      attachments: [
        {
          content: base64content,
          filename: `${fileName}.pdf`,
        },
      ],
    });

    if (emailRes.error === null) {
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully!" });
    } else {
      console.log("Error---", emailRes.error);

      throw new Error(emailRes.error);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
