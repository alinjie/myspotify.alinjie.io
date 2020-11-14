import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { InitOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { GenericObject } from "next-auth/_utils";

const options: InitOptions = {
  providers: [
    Providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scope: "user-top-read user-read-private user-read-email",
    }),
  ],
  callbacks: {
    signIn: async (_user, account, profile) => {
      if (account) {
        profile.accessToken = account.accessToken;
      }
      return true;
    },
    session: async (session, token: GenericObject) => {
      session.accessToken = token.accessToken;
      return session;
    },
    jwt: async (token, _user, _account, profile, _isNewUser) => {
      if (profile) {
        token.accessToken = profile.accessToken;
      }
      return token;
    },
  },
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
