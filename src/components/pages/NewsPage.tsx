import { News } from "../News";

export function NewsPage() {
  return (
    <main className="py-5 position-relative overflow-hidden border-top border-bottom border-light border-opacity-50" style={{
      background: '#FAF9F6'
    }}>
      <div>
        <News />
      </div>
    </main>
  );
}