"use client";

import CarouselTextBanner from "@/components/courusel-text-banner";
import FeatureProducts from "@/components/feature-products";
import { link } from "fs";

export default function Home() {
  return (
    <div>
      <CarouselTextBanner />
      <FeatureProducts />
    </div>
  );
}