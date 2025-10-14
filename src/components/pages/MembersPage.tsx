import { Members } from "../Members";

export function MembersPage() {
  return (
    <main className="py-5 position-relative overflow-hidden border-top border-bottom border-light border-opacity-50" style={{
      background: 'linear-gradient(135deg, rgba(245, 246, 247, 0.85) 0%, rgba(240, 229, 252, 0.7) 50%, rgba(245, 246, 247, 0.85) 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      <div>
        <Members />
      </div>
    </main>
  );
}