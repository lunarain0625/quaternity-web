"use server";

import { site } from "@/config/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Handles the "在线留言" form. Messages are forwarded as JSON to
// CONTACT_WEBHOOK_URL (e.g. a Formspree/Zapier/Make endpoint that emails the
// team). Until that is configured, visitors are told to email us directly
// rather than having their message silently dropped.
export async function sendMessage(prevState, formData) {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    content: String(formData.get("content") ?? "").trim(),
  };

  if (!values.name || !values.email || !values.content) {
    return { ok: false, message: "请填写名字、邮箱和内容。", values };
  }
  if (!EMAIL_RE.test(values.email)) {
    return { ok: false, message: "请输入有效的邮箱地址。", values };
  }
  if (values.name.length > 100 || values.content.length > 5000) {
    return { ok: false, message: "内容过长，请精简后再提交。", values };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return {
      ok: false,
      message: `在线留言暂未开通，请直接发送邮件至 ${site.email} 或致电门店。`,
      values,
    };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...values, source: "quaternity.com.au 联系我们" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return {
      ok: false,
      message: `提交失败，请稍后再试，或直接发送邮件至 ${site.email}。`,
      values,
    };
  }

  return { ok: true, message: "提交成功！我们会尽快与您联系。" };
}
