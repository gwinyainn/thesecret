"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "code-sent" | "verifying" | "success";

const verificationApiUrl = (
  process.env.NEXT_PUBLIC_SIGNUP_API_URL ??
  "https://the-secret-wine-sa.gwinyainn.chatgpt.site"
).replace(/\/$/, "");

function normalisePhone(value: string) {
  return value.replace(/[\s()-]/g, "");
}

function isInternationalPhone(value: string) {
  return /^\+[1-9]\d{7,14}$/.test(normalisePhone(value));
}

export default function JoinForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const sendCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!isInternationalPhone(phone)) {
      setMessage("Enter your phone number with its country code, for example +27 82 123 4567.");
      return;
    }

    if (!verificationApiUrl) {
      setMessage("Phone verification is being prepared. Please try again shortly.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`${verificationApiUrl}/verification/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalisePhone(phone) }),
      });

      if (!response.ok) throw new Error("Unable to send verification code");

      setStatus("code-sent");
      setMessage(`A six-digit code was sent to ${phone}.`);
    } catch {
      setStatus("idle");
      setMessage("We couldn’t send the code. Check your number and try again.");
    }
  };

  const verifyAndJoin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");

    if (!/^\d{6}$/.test(code)) {
      setMessage("Enter the six-digit code from the SMS.");
      return;
    }

    if (!verificationApiUrl) {
      setMessage("Phone verification is being prepared. Please try again shortly.");
      return;
    }

    setStatus("verifying");

    try {
      const response = await fetch(`${verificationApiUrl}/verification/check`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: normalisePhone(phone),
          code,
        }),
      });

      if (!response.ok) throw new Error("Unable to verify phone number");

      setStatus("success");
      setMessage("You’re in. We’ll keep The Secret between us.");
    } catch {
      setStatus("code-sent");
      setMessage("That code could not be verified. Try again or request a new one.");
    }
  };

  if (status === "success") {
    return (
      <div className="joinSuccess" role="status">
        <span aria-hidden="true">✓</span>
        <p>{message}</p>
      </div>
    );
  }

  if (status === "code-sent" || status === "verifying") {
    return (
      <form className="joinForm joinVerifyForm" onSubmit={verifyAndJoin}>
        <div className="joinFormHeading">
          <span>02</span>
          <p>Verify your number</p>
        </div>
        <label htmlFor="join-code">Verification code</label>
        <div className="joinCodeRow">
          <input
            id="join-code"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            pattern="[0-9]{6}"
            maxLength={6}
            placeholder="6-DIGIT CODE"
            value={code}
            onChange={(event) => setCode(event.target.value.replace(/\D/g, ""))}
            required
            autoFocus
          />
          <button type="submit" disabled={status === "verifying"}>
            {status === "verifying" ? "VERIFYING…" : "VERIFY & JOIN"}
          </button>
        </div>
        <button
          className="joinTextButton"
          type="button"
          onClick={() => {
            setCode("");
            setMessage("");
            setStatus("idle");
          }}
        >
          Change number or resend
        </button>
        <p className="joinMessage" aria-live="polite">{message}</p>
      </form>
    );
  }

  return (
    <form className="joinForm" onSubmit={sendCode}>
      <div className="joinFormHeading">
        <span>01</span>
        <p>Your details</p>
      </div>
      <div className="joinFields">
        <div className="joinField">
          <label htmlFor="join-name">Name</label>
          <input
            id="join-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="NAME"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="joinField">
          <label htmlFor="join-email">Email address</label>
          <input
            id="join-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="joinField joinPhoneField">
          <label htmlFor="join-phone">Phone number</label>
          <input
            id="join-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="PHONE  +27"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </div>
      </div>
      <button className="joinSubmit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "SENDING CODE…" : "VERIFY MY NUMBER"}
      </button>
      <p className="joinConsent">
        By continuing, you agree to receive one verification SMS. Standard message rates may apply.
      </p>
      <p className="joinMessage" aria-live="polite">{message}</p>
    </form>
  );
}
