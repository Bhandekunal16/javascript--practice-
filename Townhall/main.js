const express = require("express");
const bodyParser = require("body-parser");
const Color = require("./interface/color");
const Logger = require('./interface/Logger')


const AccountService = require("./account");
const OtpCreater = require("./otp");
const Uuid = require("./uuid");
const SortService = require("./stringSort");

const app = express();
app.use(bodyParser.json());
const port = 3003;

const account = new AccountService();
const otp = new OtpCreater();
const uuid = new Uuid();
const sort = new SortService();
const color = new Color();
const logger = new Logger()




app.get("/", async (req, res) => {
  const query = "hello world";
  res.send(query);
});

app.get("/create/account", async (req, res) => {
  const query = await account.createAccount();
  const data = query.map((value) => value);
  res.send(data);
});

app.get("/create/otp", async (req, res) => {
  const query = await otp.otpCreate();
  res.status(200).send(query);
});

app.get("/create/uuid", async (req, res) => {
  const query = await uuid.generateUUID();
  res.status(200).send(query);
});

app.post("/sort/string", async (req, res) => {
  const requestData = req.body;
  const query = await sort.write(requestData.data);
  await res.status(200).send({ data: query, msg: "sucess", status: true });
});

app.listen(port, () => {
  console.log(
    color.green + `Server start running on http://localhost:` + port
  );
  logger.new()
  console.log(color.green + `Node app is created successfully.`)
});
