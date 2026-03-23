"use client";

import * as React from "react";

import { SITE, SITE_URL } from "@/config/site";
import { useTranslations } from "@/lib/translations";

export function ContactForm() {
  const { t } = useTranslations();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const formAction = SITE.formspreeFormId
    ? `https://formspree.io/f/${SITE.formspreeFormId}`
    : undefined;
  const canSubmit = !!SITE.formspreeFormId;

  const nextUrl = `${SITE_URL}/?submitted=1#contact`;
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "1") {
      setShowSuccess(true);
      window.history.replaceState({}, "", window.location.pathname + "#contact");
    }
  }, []);

  return (
    <form
      action={formAction}
      method="POST"
      autoComplete="off"
      className="border-rc-blue/15 bg-white/50 max-w-xl space-y-4 rounded-xl border p-6 shadow-sm"
    >
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="Contact — Roots Connect website" />
      <input type="hidden" name="_next" value={nextUrl} />

      <div>
        <label htmlFor="contact-name" className="text-rc-beige mb-1 block text-sm font-medium">
          {t("contact.form.name")}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="off"
          className="border-rc-blue/30 text-rc-beige placeholder:text-rc-beige/50 w-full rounded-lg border bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rc-beige/30 disabled:opacity-60"
          placeholder={t("contact.form.namePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-rc-beige mb-1 block text-sm font-medium">
          {t("contact.form.email")}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="off"
          className="border-rc-blue/30 text-rc-beige placeholder:text-rc-beige/50 w-full rounded-lg border bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rc-beige/30 disabled:opacity-60"
          placeholder={t("contact.form.emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-rc-beige mb-1 block text-sm font-medium">
          {t("contact.form.message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          autoComplete="off"
          className="border-rc-blue/30 text-rc-beige placeholder:text-rc-beige/50 w-full resize-y rounded-lg border bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rc-beige/30 disabled:opacity-60"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      {showSuccess && (
        <p className="text-rc-beige/90 text-sm">{t("contact.form.success")}</p>
      )}

      {!canSubmit && (
        <p className="text-rc-beige/60 text-xs">
          {t("contact.form.noFormId")}{" "}
          <a href={`mailto:${SITE.email}`} className="underline hover:text-rc-beige/80">
            {SITE.email}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={!canSubmit}
        className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90 disabled:opacity-60 inline-flex h-10 items-center justify-center rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
      >
        {t("contact.form.submit")}
      </button>
    </form>
  );
}
