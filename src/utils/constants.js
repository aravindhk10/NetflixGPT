export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117";

export const MOVIE_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + import.meta.env.VITE_TMDB_API_key,
  },
};

export const Backgrnd_img =
  "https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg";

export const lang = [
  { id: "en", name: "English" },
  { id: "hin", name: "Hindi" },
  { id: "mal", name: "Malayalam" },
];

export const gemini_API_key = import.meta.env.VITE_gemini_API_key;
