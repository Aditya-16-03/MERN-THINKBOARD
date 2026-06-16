import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="spinner" />
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
        {/* Top action bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.75rem",
          }}
        >
          <Link to="/" className="btn-ghost-custom">
            <ArrowLeftIcon size={16} />
            Back to Notes
          </Link>
          <button onClick={handleDelete} className="btn-danger-custom">
            <Trash2Icon size={16} />
            Delete Note
          </button>
        </div>

        {/* Card */}
        <div className="glass page-enter" style={{ padding: "2.25rem" }}>
          {/* Header */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h2
              className="gradient-text"
              style={{
                fontSize: "1.65rem",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                fontFamily: "Inter, sans-serif",
                marginBottom: "0.3rem",
              }}
            >
              Edit Note
            </h2>
            <p style={{ color: "rgba(148,163,184,0.65)", fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}>
              Make changes and save when you're done
            </p>
          </div>

          {/* Title field */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label className="label-custom" htmlFor="edit-title">Title</label>
            <input
              id="edit-title"
              type="text"
              placeholder="Note title"
              className="input-custom"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          {/* Content field */}
          <div style={{ marginBottom: "1.75rem" }}>
            <label className="label-custom" htmlFor="edit-content">Content</label>
            <textarea
              id="edit-content"
              placeholder="Write your note here..."
              className="textarea-custom"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>

          {/* Save button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              className="btn-accent-custom"
              disabled={saving}
              onClick={handleSave}
              style={{ padding: "0.7rem 2rem", fontSize: "0.95rem" }}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;