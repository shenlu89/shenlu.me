import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RiShareCircleLine } from "react-icons/ri";
import Showcase from "@/components/showcase";

import { ProjectsPage } from "@/data/meta-data";

export const metadata: Metadata = ProjectsPage.metadata;

export default function Projects() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>Projects</h1>
      <div>
        <div>
          <p>The projects I have made over the years.</p>
        </div>
        <div>
          <Showcase
            href="https://mathcheap.xyz"
            title="Mathcheap"
            logoUrl="/images/mathcheap-logo.svg"
            imageUrl="/images/mathcheap-showcase.png"
            description="A dead simple online LaTex equations editor."
          />
        </div>
      </div>
    </div>
  );
}
