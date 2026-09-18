import { publicProfile } from "../../data/publicProfile";

export const GET = () =>
  new Response(
    JSON.stringify(
      {
        schemaVersion: "1.0",
        canonicalSource: "https://lekillergallet.github.io/api/profile.json",
        scope: "Public professional profile",
        ...publicProfile,
      },
      null,
      2
    ),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
