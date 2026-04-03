import { ImageResponse } from "next/og";

import { SITE } from "@/config/site";
import { isLocale, type Locale } from "@/i18n/config";
import { getMessages } from "@/messages";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const BG = "#0e293e";
const FOREGROUND = "#f3f3e7";
const MUTED = "rgba(243, 243, 231, 0.78)";
const ACCENT = "#a28772";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "nl";
  const m = getMessages(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: BG,
        }}
      >
        <div
          style={{
            width: 88,
            height: 5,
            background: ACCENT,
            borderRadius: 2,
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            color: FOREGROUND,
            lineHeight: 1.08,
            maxWidth: 980,
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 20,
            color: MUTED,
            fontWeight: 500,
            maxWidth: 980,
            lineHeight: 1.3,
          }}
        >
          {m.home.title}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 16,
            color: MUTED,
            fontWeight: 400,
            maxWidth: 920,
            lineHeight: 1.35,
          }}
        >
          {m.home.subtitle}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
