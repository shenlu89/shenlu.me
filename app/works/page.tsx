import { Metadata } from "next";
import Link from "next/link";
import Showcase from "@/components/showcase";
import { WorksPage } from "@/data/meta-data";

export const metadata: Metadata = WorksPage.metadata;

export default function Projects() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>Works</h1>
      <div>
        <div>
          <p>The works I had made over the years.</p>
        </div>
        <hr />
        <h2>Projects</h2>
        <div>
          <Showcase
            href="https://mathcheap.xyz"
            title="Mathcheap"
            logoUrl="/images/mathcheap-logo.svg"
            imageUrl="/images/mathcheap-showcase.png"
            description="A dead simple online LaTeX equation editor."
          />
        </div>
        <hr />
        <h2>Publications</h2>
        <strong>
          Searching large-scale scRNA-seq databases via unbiased cell embedding
        </strong>
        <p>
          Zhi-Jie Cao, Lin Wei, <strong>Shen Lu</strong>, De-Chang Yang, Ge Gao{" "}
          {` `}
          <Link
            target="_blank"
            href="https://doi.org/10.1038/s41467-020-17281-7"
          >
            [Nature Communications]
          </Link>
        </p>
        <strong>
          Genomic Architecture of Cells in Tissues (GeACT): Study of Human
          Mid-gestation Fetus
        </strong>
        <p>
          Feng Tian, Fan Zhou, Xiang Li, Wenping Ma, Honggui Wu, Ming Yang, Alec
          R. Chapman, David F. Lee, Longzhi Tan, Dong Xing, Guangjun Yin, Ayjan
          Semayel, Jing Wang, Jia Wang, Wenjie Sun, Runsheng He, Siwei Zhang,
          Zhijie Cao, Lin Wei, <strong>Shen Lu </strong>, Dechang Yang, Yunuo
          Mao, Yuan Gao, Kexuan Chen, Yu Zhang, Xixi Liu, Jun Yong, Liying Yan,
          Yanyi Huang, Jie Qiao, Fuchou Tang, Ge Gao, X. Sunney Xie {` `}
          <Link
            target="_blank"
            href="https://www.biorxiv.org/content/10.1101/2020.04.12.038000v1"
          >
            [bioRxiv]
          </Link>
        </p>
      </div>
    </div>
  );
}
