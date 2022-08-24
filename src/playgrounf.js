// import axios from "axios";

const axios = require('axios').default;

axios.get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=9df37e6f-6bec-432b-a405-d78e1f1591ca`)
.then(response => {
    // const chosenVideo = response.data.find(e => e.id===currentVideoId);
    console.log(response.data)

})
