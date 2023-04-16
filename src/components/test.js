  const axios = require('axios').default;
const fs = require("fs");
const FormData = require("form-data");

const form = new FormData();
form.append("providers", 'api4ai');
form.append("file", fs.createReadStream("public/assets/heroPhoto.jpg"));

const options = {
  method: 'POST',
  url: 'https://api.edenai.run/v2/image/object_detection',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTMzYTBlYjktZjJjNC00ZjI3LTllZDItYjc4ZTg3NzBhNTlkIiwidHlwZSI6ImFwaV90b2tlbiJ9.VOb8PMSRYPorpiZzla34bT_BLWfUL2J8ORkZcQnCxMc',
    'Content-Type': 'multipart/form-data; boundary=' + form.getBoundary()
  },
  data: form
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });