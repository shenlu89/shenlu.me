import Link from 'next/link'
export default function About() {
  return (
    <div className="flex flex-col relative max-w-none prose dark:prose-invert">
      <h1>About</h1>
      <div>
        <p>
          Hi, I’m Shen Lu 👋, a full-stack developer. Now I’m focusing on web
          development and data visualization.
        </p>
        <hr />
        <h2>Publications</h2>
        <strong>
          Searching large-scale scRNA-seq databases via unbiased cell embedding
        </strong>
        <p>
          Zhi-Jie Cao, Lin Wei, <strong>Shen Lu</strong>, De-Chang Yang, Ge Gao{' '}
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
  )
}
