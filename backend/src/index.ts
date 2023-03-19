import express from "express";
import fetch from 'node-fetch';
const mySecret = `08nextstrait`;
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwODc3OGZhYjgxMzQ3NGRlZjI2NWUyYjMyZTFjYmQxNjNiNzU0NjgzOWJhMDYyNzIwMTE5ZGFmNGY5OWViNTI1MjhiM2ZkNmQwNThkY2Y2In0.eyJhdWQiOiI2OTA0NjVkYi1iZDQ1LTQ3YjQtYjExYi1kMDZmODViOTAzNWEiLCJqdGkiOiI2MDg3NzhmYWI4MTM0NzRkZWYyNjVlMmIzMmUxY2JkMTYzYjc1NDY4MzliYTA2MjcyMDExOWRhZjRmOTllYjUyNTI4YjNmZDZkMDU4ZGNmNiIsImlhdCI6MTY3OTIzNTc5MywibmJmIjoxNjc5MjM1NzkzLCJleHAiOjE2NzkzMjIxOTMsInN1YiI6IjkzODg3ODIiLCJhY2NvdW50X2lkIjozMDk0NjA1MCwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsicHVzaF9ub3RpZmljYXRpb25zIiwiZmlsZXMiLCJjcm0iLCJmaWxlc19kZWxldGUiLCJub3RpZmljYXRpb25zIl19.FrASFOU3sbptxK745Em0TS1ye6wfuQLNJeU7ePTVKUXnozDUtkQal15nl0RGN806xHhoLQpjkpcOg24LVVPxRe10SbMI5kTWmKTrK_7ezW-s4KznozPMzzpnLsFnonlHa-joMgYLjJXx0b0sqHp5V_b3jB_7JTKHG5cG06dSlySLEb9A4JaDlJhoHxfv46a-199WnOHxKhqwTomiRhFjNwh03t1HeWL_NvVmeHkNTpahiVKTgS3KuSwOK0Rv9cxBwerTtwB7DYnZkC294qYYK_U3WvHwxMMx8smXs_W4Xugnj0P4TgmX6d-XCOZ79BxN6RlF6hqCzoSCp8T3seWSbw";
const app = express();
const PORT = 4040;

app.get("/", async (req: any, res: { send: (arg0: string) => void }) => {
  res.send(
    await fetch(`https://${mySecret}.amocrm.ru/api/v4/leads?query=${req.query ? req.query : ""}`, {
      headers: { authorization: `Bearer ${token}` },
    }).then((res: any) => res.json()))
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
