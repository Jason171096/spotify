import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
    "user-read-email",
    "playlist-read-private",
    "playlist-read-collaborate",
    "streaming",
    "user-read-private",
    "user-library-read"
].join(",")

const params = {
    scope: scopes
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString()

const spotifyWebApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export default spotifyWebApi;

export { LOGIN_URL }