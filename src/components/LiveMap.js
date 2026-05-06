"use client";

/**
 * LiveMap — Embeds an interactive OpenStreetMap iframe.
 * No API key or npm package required.
 *
 * Props:
 *  - lat (number): Latitude
 *  - lon (number): Longitude
 *  - zoom (number): Map zoom level (default: 14)
 *  - height (string): CSS height (default: "300px")
 *  - borderRadius (number): Border radius in px (default: 12)
 *  - marker (boolean): Show marker (default: true)
 *  - style (object): Additional inline styles
 */
export default function LiveMap({
  lat = 40.7128,
  lon = -74.006,
  zoom = 14,
  height = "300px",
  borderRadius = 12,
  marker = true,
  style = {},
}) {
  const markerParam = marker
    ? `&marker=${lat},${lon}`
    : "";

  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.02},${lat - 0.015},${lon + 0.02},${lat + 0.015}&layer=mapnik${markerParam}`;

  return (
    <div
      style={{
        width: "100%",
        height,
        borderRadius,
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        position: "relative",
        ...style,
      }}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title={`Map of ${lat}, ${lon}`}
      />
      {/* Overlay gradient for sleek look */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          background: "linear-gradient(to top, rgba(255,255,255,0.6), transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
