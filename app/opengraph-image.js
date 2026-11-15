import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

// The preview image shown when the site is shared on LinkedIn, Discord etc.
// It is generated once at build time.
export const alt = `${profile.name} - ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0e0f",
          color: "#e8eef0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 20,
              height: 20,
              background: "#5eead4",
              marginRight: 20,
            }}
          />
          <div style={{ display: "flex", fontSize: 28, color: "#9fb0b6" }}>
            Portfolio
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, fontWeight: 700 }}>
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              color: "#5eead4",
              marginTop: 16,
            }}
          >
            {profile.title}
          </div>
        </div>
      </div>
    ),
    size
  );
}
