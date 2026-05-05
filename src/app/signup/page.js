"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/auth.css";

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#000" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <header className="auth-header">
        <Link href="/" className="auth-logo" id="auth-logo">
          Uber
        </Link>
      </header>

      <main className="auth-main">
        <div className="auth-container">
          <div className="auth-form-wrapper">
            <h1 className="auth-title" id="signup-title">
              Create your account
            </h1>

            <form className="auth-form" id="signup-form">
              <div className="auth-input-row">
                <div className="auth-input-group">
                  <input type="text" className="auth-input" id="signup-firstname" placeholder="First name" aria-label="First name" autoComplete="given-name" required />
                </div>
                <div className="auth-input-group">
                  <input type="text" className="auth-input" id="signup-lastname" placeholder="Last name" aria-label="Last name" autoComplete="family-name" required />
                </div>
              </div>

              <div className="auth-input-group">
                <input type="email" className="auth-input" id="signup-email" placeholder="Enter your email" aria-label="Email" autoComplete="email" required />
              </div>

              <div className="auth-input-group">
                <input type="tel" className="auth-input" id="signup-phone" placeholder="Enter phone number" aria-label="Phone number" autoComplete="tel" required />
              </div>

              <div className="auth-input-group auth-input-password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="auth-input"
                  id="signup-password"
                  placeholder="Create a password"
                  aria-label="Password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  id="toggle-password"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
              </div>

              <button type="submit" className="btn btn-primary auth-btn" id="signup-submit-btn">
                Sign up
              </button>

              <div className="auth-divider">
                <span className="auth-divider-line"></span>
                <span className="auth-divider-text">or</span>
                <span className="auth-divider-line"></span>
              </div>

              <button type="button" className="auth-social-btn" id="google-signup-btn">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              <button type="button" className="auth-social-btn" id="apple-signup-btn">
                <AppleIcon />
                <span>Continue with Apple</span>
              </button>
            </form>

            <p className="auth-legal">
              By signing up, you agree to Uber&apos;s{" "}
              <Link href="#">Terms of Service</Link> and{" "}
              <Link href="#">Privacy Policy</Link>, including the collection and use of your data as described.
            </p>
          </div>

          <div className="auth-footer-link">
            <p>
              Already have an account?{" "}
              <Link href="/login" id="goto-login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
