"use client";

import { useActionState } from "react";
import { sendMessage } from "./actions";

const inputClass =
  "w-full rounded-lg border border-black/15 bg-white px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/30";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, null);
  // Keep what the visitor typed if submission fails; clear it on success.
  const values = state?.ok ? {} : (state?.values ?? {});

  return (
    <form action={formAction} key={state?.ok ? "sent" : "draft"} className="space-y-4">
      <label className="block text-sm font-medium">
        名字 <span className="text-brand">*</span>
        <input name="name" required maxLength={100} defaultValue={values.name} className={`${inputClass} mt-1.5`} />
      </label>
      <label className="block text-sm font-medium">
        邮箱 <span className="text-brand">*</span>
        <input name="email" type="email" required defaultValue={values.email} className={`${inputClass} mt-1.5`} />
      </label>
      <label className="block text-sm font-medium">
        内容 <span className="text-brand">*</span>
        <textarea
          name="content"
          required
          rows={5}
          maxLength={5000}
          defaultValue={values.content}
          className={`${inputClass} mt-1.5 resize-y`}
        />
      </label>

      {state?.message && (
        <p aria-live="polite" className={`text-sm ${state.ok ? "text-green-700" : "text-red-600"}`}>
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand py-3 font-medium text-white transition hover:bg-brand-dark disabled:opacity-60"
      >
        {pending ? "提交中…" : "提交预约"}
      </button>
    </form>
  );
}
