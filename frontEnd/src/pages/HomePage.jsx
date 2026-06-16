import { useState } from "react";
import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useEffect } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const SkeletonCard = () => (
  <div className="skeleton-card" style={{ height: 160 }}>
    <div style={{ padding: "1.4rem" }}>
      <div style={{ height: 18, background: "rgba(255,255,255,0.06)", borderRadius: 8, marginBottom: "0.75rem", width: "60%" }} />
      <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 6, marginBottom: "0.4rem", width: "90%" }} />
      <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 6, marginBottom: "0.4rem", width: "75%" }} />
      <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 6, width: "55%" }} />
    </div>
  </div>
);

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}

      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "2rem 1.25rem" }}>
        {/* Loading skeletons */}
        {loading && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {/* Notes grid */}
        {!loading && notes.length > 0 && !isRateLimited && (
          <div
            className="page-enter"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;