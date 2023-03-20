import express from "express";
import fetch from 'node-fetch';
const mySecret = `08nextstrait`;
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjYwODc3OGZhYjgxMzQ3NGRlZjI2NWUyYjMyZTFjYmQxNjNiNzU0NjgzOWJhMDYyNzIwMTE5ZGFmNGY5OWViNTI1MjhiM2ZkNmQwNThkY2Y2In0.eyJhdWQiOiI2OTA0NjVkYi1iZDQ1LTQ3YjQtYjExYi1kMDZmODViOTAzNWEiLCJqdGkiOiI2MDg3NzhmYWI4MTM0NzRkZWYyNjVlMmIzMmUxY2JkMTYzYjc1NDY4MzliYTA2MjcyMDExOWRhZjRmOTllYjUyNTI4YjNmZDZkMDU4ZGNmNiIsImlhdCI6MTY3OTIzNTc5MywibmJmIjoxNjc5MjM1NzkzLCJleHAiOjE2NzkzMjIxOTMsInN1YiI6IjkzODg3ODIiLCJhY2NvdW50X2lkIjozMDk0NjA1MCwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsicHVzaF9ub3RpZmljYXRpb25zIiwiZmlsZXMiLCJjcm0iLCJmaWxlc19kZWxldGUiLCJub3RpZmljYXRpb25zIl19.FrASFOU3sbptxK745Em0TS1ye6wfuQLNJeU7ePTVKUXnozDUtkQal15nl0RGN806xHhoLQpjkpcOg24LVVPxRe10SbMI5kTWmKTrK_7ezW-s4KznozPMzzpnLsFnonlHa-joMgYLjJXx0b0sqHp5V_b3jB_7JTKHG5cG06dSlySLEb9A4JaDlJhoHxfv46a-199WnOHxKhqwTomiRhFjNwh03t1HeWL_NvVmeHkNTpahiVKTgS3KuSwOK0Rv9cxBwerTtwB7DYnZkC294qYYK_U3WvHwxMMx8smXs_W4Xugnj0P4TgmX6d-XCOZ79BxN6RlF6hqCzoSCp8T3seWSbw";
const app = express();
const PORT = 4040;

interface ApiResponse {
  _page: number;
  _links: {
    self: {
      href: string;
    };
  };
  _embedded: {
    leads: {
      id: number;
      name: string;
      price: number;
      responsible_user_id: number;
      group_id: number;
      status_id: number;
      pipeline_id: number;
      loss_reason_id: number | null;
      created_by: number;
      updated_by: number;
      created_at: number;
      updated_at: number;
      closed_at: number | null;
      closest_task_at: number | null;
      is_deleted: boolean;
      custom_fields_values: any[] | null;
      score: number | null;
      account_id: number;
      labor_cost: number | null;
      _links: {
        self: {
          href: string;
        };
      };
      _embedded: {
        tags: any[];
        companies: {
          id: number;
          _links: {
            self: {
              href: string;
            };
          };
        }[];
      };
    }[];
  };
}

async function fetchData(endpoint: string, token: string, query?: string,): Promise<ApiResponse> {
  const url = query ? `${endpoint}?${query}` : endpoint;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json() as ApiResponse;

  return data;
}

app.get("/", async (req: any, res: any ) => {
const { origin } = req.headers;

const field = fetchData('https://08nextstrait.amocrm.ru/api/v4/leads?with=contacts', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRlNGEwOTI3NDQ3OWZlZDQyMTY0ZTM4ODQzZDA5NjY2MzI5MTU1NjJhMGQ0YzEwNDEzZWIwN2I1ZmZhZDExNmU1NTViMDZhMjM5ZjIyNWQwIn0.eyJhdWQiOiI2OTA0NjVkYi1iZDQ1LTQ3YjQtYjExYi1kMDZmODViOTAzNWEiLCJqdGkiOiJkZTRhMDkyNzQ0NzlmZWQ0MjE2NGUzODg0M2QwOTY2NjMyOTE1NTYyYTBkNGMxMDQxM2ViMDdiNWZmYWQxMTZlNTU1YjA2YTIzOWYyMjVkMCIsImlhdCI6MTY3OTMzODkyNywibmJmIjoxNjc5MzM4OTI3LCJleHAiOjE2Nzk0MjUzMjcsInN1YiI6IjkzODg3ODIiLCJhY2NvdW50X2lkIjozMDk0NjA1MCwiYmFzZV9kb21haW4iOiJhbW9jcm0ucnUiLCJzY29wZXMiOlsicHVzaF9ub3RpZmljYXRpb25zIiwiZmlsZXMiLCJjcm0iLCJmaWxlc19kZWxldGUiLCJub3RpZmljYXRpb25zIl19.SPoEFNHDdQfeG0Oqc7n0pSPpGqyY6VvwCejEa4NXSxzg-SvLUrP1yx41mtuTkdciIKcbqLq3AUFExZoCdM0SBQLcTpTYKG-br8J18Exs2BLDOkB-clvDPQZU2kPqXLjx-ZWk_4boy07vbIRdwr2ix-5Tg56PIMY3B0dhz5m3EW8Kauu2IpuEz7p3gxpwKtQBED09ITo_RVlPk8wXknHkF8zfqC2SF4-J4mN-h7R8zavx5YT9_CGh5I5984XGMIy3DQ4xvIJ64IG9zHmYCxfBZNvwtL7lHmCeohiWdJFlAk-UcIYq80cbgnNDdnN1FYIBmv-f_kzODjbRHD04po9G2Q');

res.header('Access-Control-Allow-Origin', origin);
res.header('Access-Control-Allow-Credentials', true);
console.log(field);
  res.send('!');
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
