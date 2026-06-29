import bgAttachImage from "@/assets/bgattach.png";

export default function FixedImageSection() {
  return (
    <section
      className="fixed-image-section"
      style={{ backgroundImage: `url(${bgAttachImage})` }}
      aria-label="Construction site overview"
    />
  );
}
