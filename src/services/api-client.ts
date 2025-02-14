
import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1ad9a9849afd4789b49d0142232697bb"
    }
});