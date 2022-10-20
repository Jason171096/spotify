import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import spotifyWebApi, { LOGIN_URL } from "../../../lib/spotify"


const refreshAccessToken = async (token) => {
  try {

    spotifyWebApi.setAccessToken(token.accessToken)
    spotifyWebApi.setRefreshToken(token.refreshToke)

    const { body: refreshedToken } = await spotifyWebApi.refreshAccessToken();
    console.log("Your token is ", refreshedToken)

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accesTokenExpires: Date.now + refreshedToken.expires_in * 1000, // 1 hour
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken
    }

  } catch (error) {
    console.log(error)

    return {
      ...token,
      error: "RefreshAccessTokenError"
    }
    
  }
}

export default NextAuth({
    providers: [
        SpotifyProvider({
          clientId: process.env.SPOTIFY_CLIENT_ID,
          clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
          authorization: LOGIN_URL,
        }),
        
    ],
    secret: process.env.JWT_SECRET,
    pages: {
      signIn: '/login'
    },
    callbacks: {
      async jwt({token, account, user}) {

        //Initial sign in
        if(account && user) {
          return {
            ...token, 
            accessToken: account.access_token,
            refreshToken: account.refresh_token,
            userName: account.providerAccountId,
            accesTokenExpires: account.expires_at * 1000
          }
        }

        //Return previous token if the access token has not expired yet
        if(Date.now() < token.accesTokenExpires) {
          console.log("Existing access token is valid")
          return token;
        }

        //Access token has expired, so we need to refresh it...
        console.log("Existing access token is valid")
        return await refreshAccessToken(token)

        
      },
      async session({session, token}) {
        session.user.accessToken = token.accessToken;
        session.user.refreshToken = token.refreshToken;
        session.user.userName = token.userName;

        return session;
      }
    }
})
