import { Hero } from "../Hero";
import { Members } from "../Members";
import { useState, useEffect } from "react";

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate component initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="h5 text-muted">Loading WAM Alliance...</h2>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="text-center">
          <h2 className="h4 text-danger mb-3">Something went wrong</h2>
          <p className="text-muted">{error}</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  try {
    return (
      <main>
        <Hero />
        <Members />
      </main>
    );
  } catch (error) {
    console.error("HomePage render error:", error);
    setError(error instanceof Error ? error.message : "Unknown error occurred");
    return null;
  }
}