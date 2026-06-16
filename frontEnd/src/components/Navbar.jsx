import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="navbar-glass sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="flex items-center gap-2">
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #00FF9D 0%, #7c83ff 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 0 18px rgba(0,255,157,0.35)",
                }}
              >
                <span style={{ fontSize: 18, color: "#0d0f1a", fontWeight: 900 }}>T</span>
              </div>
              <h1
                className="gradient-text"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ThinkBoard
              </h1>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link to="/create" className="btn-accent-custom">
              <PlusIcon size={16} />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;