import { Timespan } from "types/Timespan";
export const SPOTIFY_API_URL = "https://api.spotify.com/v1";

export const timeSpans: Timespan[] = ["long_term", "medium_term", "short_term"];

export const timeSpanOptions: { label: string; value: Timespan }[] = [
  {
    label: "Last four weeks",
    value: "short_term",
  },
  {
    label: "Last six months",
    value: "medium_term",
  },
  {
    label: "All time",
    value: "long_term",
  },
];
