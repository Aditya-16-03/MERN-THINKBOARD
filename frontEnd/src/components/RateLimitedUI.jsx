import { ZapIcon } from "lucide-react";

const RateLimitedUI = () => {
  return (
    <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "1.5rem 1.25rem 0" }}>
      <div
        className="glass page-enter"
        style={{
          borderColor: "rgba(245,166,35,0.25)",
          borderTopColor: "#f5a623",
          borderTopWidth: 3,
          padding: "1.5rem 1.75rem",
          display: "flex",
          alignItems: "flex-start",
          gap: "1.25rem",
        }}
      >
        {/* Icon */}
        <div
          style={{
            background: "rgba(245,166,35,0.12)",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: "50%",
            padding: "0.85rem",
            flexShrink: 0,
            boxShadow: "0 0 20px rgba(245,166,35,0.15)",
          }}
        >
          <ZapIcon size={22} style={{ color: "#f5a623" }} />
        </div>

        {/* Text */}
        <div>
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: "#f5a623",
              marginBottom: "0.3rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Rate Limit Reached
          </h3>
          <p style={{ fontSize: "0.88rem", color: "rgba(226,232,240,0.8)", marginBottom: "0.2rem", fontFamily: "Inter, sans-serif" }}>
            You've made too many requests in a short period. Please wait a moment.
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(148,163,184,0.6)", fontFamily: "Inter, sans-serif" }}>
            Try again in a few seconds for the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;