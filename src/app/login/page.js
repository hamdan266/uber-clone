import Link from "next/link";
import "@/styles/auth.css";
import GoogleIcon from "./GoogleIcon";
import AppleIcon from "./AppleIcon";

export const metadata = {
  title: "Log in",
  description: "Log in to your Uber account. Enter your phone number or email to get started.",
};

export default function LoginPage() {
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
            <h1 className="auth-title" id="login-title">
              What&apos;s your phone number or email?
            </h1>

            <form className="auth-form" id="login-form">
              <div className="auth-input-group">
                <input
                  type="text"
                  className="auth-input"
                  id="login-email"
                  placeholder="Enter phone number or email"
                  aria-label="Phone number or email"
                  autoComplete="email"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary auth-btn" id="login-continue-btn">
                Continue
              </button>

              <div className="auth-divider">
                <span className="auth-divider-line"></span>
                <span className="auth-divider-text">or</span>
                <span className="auth-divider-line"></span>
              </div>

              <button type="button" className="auth-social-btn" id="google-login-btn">
                <GoogleIcon />
                <span>Continue with Google</span>
              </button>

              <button type="button" className="auth-social-btn" id="apple-login-btn">
                <AppleIcon />
                <span>Continue with Apple</span>
              </button>
            </form>

            <p className="auth-legal">
              By continuing, you agree to calls, including by autodialer,{" "}
              <Link href="#">WhatsApp</Link>, or <Link href="#">texts</Link> from Uber and its{" "}
              <Link href="#">affiliates</Link>.
            </p>
          </div>

          <div className="auth-footer-link">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" id="goto-signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
