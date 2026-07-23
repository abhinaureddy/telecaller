import { MeshBackground } from "@/components/MeshBackground";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden>
      <MeshBackground distortion={1} swirl={0.7} speed={0.6} />
    </div>
  );
}
