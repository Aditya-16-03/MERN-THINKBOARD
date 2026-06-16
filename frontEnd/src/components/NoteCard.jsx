import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // get rid of the deleted one
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link to={`/note/${note._id}`} className="note-card" style={{ textDecoration: "none" }}>
      <div style={{ padding: "1.4rem" }}>
        {/* Title */}
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "#e2e8f0",
            marginBottom: "0.55rem",
            lineHeight: 1.3,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {note.title}
        </h3>

        {/* Content preview */}
        <p
          style={{
            fontSize: "0.88rem",
            color: "rgba(148,163,184,0.75)",
            lineHeight: 1.65,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            marginBottom: "1.1rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {note.content}
        </p>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "0.75rem",
              color: "rgba(100,116,139,0.85)",
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            {formatDate(new Date(note.createdAt))}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <span style={{ color: "rgba(0,255,157,0.6)", display: "flex", alignItems: "center" }}>
              <PenSquareIcon size={14} />
            </span>
            <button
              onClick={(e) => handleDelete(e, note._id)}
              title="Delete note"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem 0.35rem",
                borderRadius: 6,
                color: "rgba(255,77,109,0.65)",
                display: "flex",
                alignItems: "center",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ff4d6d";
                e.currentTarget.style.background = "rgba(255,77,109,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,77,109,0.65)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Trash2Icon size={14} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default NoteCard;