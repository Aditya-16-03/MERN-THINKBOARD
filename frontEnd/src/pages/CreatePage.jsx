import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      if (error.response.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
        {/* Back button */}
        <Link to="/" className="btn-ghost-custom" style={{ marginBottom: "1.75rem", display: "inline-flex" }}>
          <ArrowLeftIcon size={16} />
          Back to Notes
        </Link>

        {/* Card */}
        <div
          className="glass page-enter"
          style={{ padding: "2.25rem" }}
        >
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
              Create New Note
            </h2>
            <p style={{ color: "rgba(148,163,184,0.65)", fontSize: "0.9rem", fontFamily: "Inter, sans-serif" }}>
              Capture your thoughts and ideas
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Title field */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label className="label-custom" htmlFor="note-title">Title</label>
              <input
                id="note-title"
                type="text"
                placeholder="Give your note a title..."
                className="input-custom"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content field */}
            <div style={{ marginBottom: "1.75rem" }}>
              <label className="label-custom" htmlFor="note-content">Content</label>
              <textarea
                id="note-content"
                placeholder="Write your note here..."
                className="textarea-custom"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="submit"
                className="btn-accent-custom"
                disabled={loading}
                style={{ padding: "0.7rem 2rem", fontSize: "0.95rem" }}
              >
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;