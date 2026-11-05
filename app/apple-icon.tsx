import { ImageResponse } from "next/og";

// iOS "Add to Home Screen" icon, 180×180 PNG. iOS fills transparent areas with black,
// so the background is solid pink and the cupcake sits in the middle.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const cupcake = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="8 2 32 42">
  <path d="M13.5 27 L16.8 39.5 Q17.3 40.6 18.5 40.6 L29.5 40.6 Q30.7 40.6 31.2 39.5 L34.5 27Z" fill="#fff" stroke="#5B3A33" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M20 29.5 L21 38 M24 29.5 L24 38 M28 29.5 L27 38" stroke="#5B3A33" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M12 27 Q10.5 21.5 15.8 20.6 Q14.8 14.6 21 15.2 Q23 10.8 27.6 13.8 Q33.4 12.8 32.8 18.8 Q37.6 20.8 36 27Z" fill="#FF8FB1" stroke="#5B3A33" stroke-width="1.6" stroke-linejoin="round"/>
  <path d="M17 23 Q22 25 27 22 M20 18.5 Q24 20 28 17.5" stroke="#5B3A33" stroke-width="1.1" fill="none" stroke-linecap="round"/>
  <path d="M25.2 12.6 Q26.3 7.6 29.5 5.6" stroke="#5B3A33" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <circle cx="24.5" cy="11.2" r="3.2" fill="#E85A8A" stroke="#5B3A33" stroke-width="1.3"/>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFC2D4",
        }}
      >
        <img src={`data:image/svg+xml;utf8,${encodeURIComponent(cupcake)}`} width={110} height={144} alt="" />
      </div>
    ),
    size,
  );
}
