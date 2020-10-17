import axios from "axios";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: "AIzaSyC7T4P4yjnDZFekk3LjANA5dWVXppaYpSM",
        part: "snippet",
        type: "video",
        maxResults: 5,
    },
});
