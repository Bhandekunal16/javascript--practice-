const express = require('express');
const bodyParser = require('body-parser');
const AccountService = require('./account')
const OtpCreater = require('./otp')
const Uuid = require('./uuid')
const SortService = require('./stringSort')

const app = express();
app.use(bodyParser.json());
const port = 3003;

const account = new AccountService()
const otp = new OtpCreater()
const uuid = new Uuid()
const sort = new SortService()

 app.get('/', async (req, res) => {
   const query = await account.createAccount()
   const data = query.map((value)=>value)
   console.log(data)
  res.send(data);
});

app.get('/create/otp', async (req, res) => {
    const query = await otp.otpCreate()
    res.status(200).send(query);
 });

 app.get('/create/uuid', async (req, res) => {
  const query = await uuid.generateUUID()
  res.status(200).send(query);
});

app.post('/sort/string', async (req, res) => {
  const requestData = req.body;
  const query = await sort.write(requestData.data)
   await res.status(200).send({data : query, msg: 'sucess', status: true});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
