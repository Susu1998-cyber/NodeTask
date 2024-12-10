const axios = require("axios")

const url = "https://aldarsandbox.egoalprime.com/egoal/api/salesdata"

const data = {
    outlet_code: "L1-165A",
    t_code: "t0002565",
    mall_code: "yasmall",
    transaction_count: 30,
    net_sales: 3200.69,
    transaction_date: "2021-05-19T00:00:00",
}

const headers = {
    "x-apikey": "exZdVmktZIyVmqe76hNqZ",
    Authorization: "Basic ZWdvYWxAaW5kaXRlY2g6Y15ENzZUMElSeg==",
    "Content-Type": "application/json",
}

axios.post(url,data, {headers})

.then((response) => {
    console.log("Data sent Successfully", response.data);

    
})
.catch((error) => {
    console.error(
        "Error:",
        error.response ? error.response.data : error.message
    );
    
})