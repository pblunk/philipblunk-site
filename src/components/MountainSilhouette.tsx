export default function MountainSilhouette({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`mountains ${compact ? "mountains--compact" : ""}`}
      viewBox="0 0 1200 360"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M0 275L110 225L215 250L335 170L440 208L545 145L650 205L770 128L885 180L1000 115L1200 210V360H0Z" />
      <path d="M0 306L130 260L245 289L360 225L475 265L595 210L720 270L850 205L975 252L1090 180L1200 240V360H0Z" />
      <path d="M0 336L120 302L250 320L390 285L515 317L650 268L785 315L920 265L1035 305L1145 250L1200 275V360H0Z" />
    </svg>
  );
}
