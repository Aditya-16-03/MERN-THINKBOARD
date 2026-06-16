import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div
      className="page-enter"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1rem",
        textAlign: "center",
        maxWidth: 420,
        margin: "0 auto",
      }}
    >
      {/* Icon blob */}
      <div
        style={{
          background: "rgba(0,255,157,0.08)",
          border: "1px solid rgba(0,255,157,0.2)",
          borderRadius: "50%",
          padding: "2rem",
          marginBottom: "1.75rem",
          boxShadow: "0 0 40px rgba(0,255,157,0.12)",
          animation: "orbFloat 6s ease-in-out infinite alternate",
        }}
      >
        <NotebookIcon size={44} style={{ color: "#00FF9D" }} />
      </div>

      {/* Heading */}
      <h3
        className="gradient-text"
        style={{
          fontSize: "1.75rem",
          fontWeight: 800,
          marginBottom: "0.75rem",
          fontFamily: "Inter, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        No notes yet
      </h3>

      {/* Sub-text */}
      <p
        style={{
          color: "rgba(148,163,184,0.7)",
          fontSize: "0.95rem",
          lineHeight: 1.65,
          marginBottom: "2rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>

      <Link to="/create" className="btn-accent-custom" style={{ fontSize: "0.95rem", padding: "0.7rem 1.8rem" }}>
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;