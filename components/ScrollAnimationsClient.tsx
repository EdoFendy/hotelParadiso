"use client";

import dynamic from "next/dynamic";

const ScrollAnimations = dynamic(() => import("@/components/scroll-animations"), { ssr: false });

export default function ScrollAnimationsClient() {
  return <ScrollAnimations />;
} 