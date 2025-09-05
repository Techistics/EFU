// app/details/page.tsx
"use client";

import React, { Suspense } from "react";
import EFU from "../components/efu";
import DetailsContent from "./Details";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
      <DetailsContent />
    </Suspense>
  );
}
