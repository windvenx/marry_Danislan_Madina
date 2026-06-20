"use client";

export function MeshBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#F4F1EA]" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-4 z-50 border-[0.5px] border-stone-300/70"
      />
    </>
  );
}
