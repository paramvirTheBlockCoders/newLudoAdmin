import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {token}=req.body
      const {data} = req.body;
      console.log(data, "to be send to api tp!!!!`1`1`11");
      var config = {
        method: "post",
        url: "http://airaicloud.com:6000/api/v1/admin/updateseg",
        headers:{
          'Authorization': `Bearer ${token}`,
      },data,
      };
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        res.status(200).json({ data: response.data});
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
