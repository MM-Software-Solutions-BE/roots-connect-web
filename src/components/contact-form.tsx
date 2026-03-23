"use client";

import * as React from "react";

import { SITE } from "@/config/site";
import { useTranslations } from "@/lib/translations";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const { t } = useTranslations();
  const [status, setStatus] = React.useState<Status>("idle");

  const formAction = SITE.formspreeFormId
    ? `https://formspree.io/f/${SITE.formspreeFormId}`
    : null;
  const canSubmit = !!SITE.formspreeFormId;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const res = await fetch(formAction!, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      action={formAction ?? undefined}
      method="POST"
      onSubmit={onSubmit}
      className="border-rc-blue/15 bg-white/50 max-w-xl space-y-4 rounded-xl border p-6 shadow-sm"
    >
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="Contact — Roots Connect website" />

      <div>
        <label htmlFor="contact-name" className="text-rc-beige mb-1 block text-sm font-medium">
          {t("contact.form.name")}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
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
          disabled={status === "submitting"}
          className="border-rc-blue/30 text-rc-beige placeholder:text-rc-beige/50 w-full resize-y rounded-lg border bg-white/80 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-rc-beige/30 disabled:opacity-60"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>

      {status === "success" && (
        <p className="text-rc-beige/90 text-sm">{t("contact.form.success")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          {t("contact.form.error")}{" "}
          <a href={`mailto:${SITE.email}`} className="underline">
            {SITE.email}
          </a>
          .
        </p>
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
        disabled={status === "submitting" || !canSubmit}
        className="bg-rc-blue text-rc-beige hover:bg-rc-blue/90 disabled:opacity-60 inline-flex h-10 items-center justify-center rounded-lg border border-transparent px-4 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-rc-blue/40 focus-visible:ring-offset-2 focus-visible:ring-offset-rc-beige focus-visible:outline-none"
      >
        {status === "submitting" ? t("contact.form.submitting") : t("contact.form.submit")}
      </button>
    </form>
  );
}
