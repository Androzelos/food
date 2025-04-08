import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer Q0NWfm-95cLU82-D0N6_0i89nG_k5xiKLM1Gq8P5kLqc_ZGEf-GGywfuY0Kz35odIbwwcpwIoRZTJwhHs1ci9B1L5mr5CVlk5Yd8U6cogKIQlvKGgXed-cjv9xDQZ3Yx"
    }
})

//woaw