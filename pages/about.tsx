import Link from 'next/link'
export default function About() {
  return (
    <div className="flex flex-col relative w-full text-black dark:text-white">
      <h1 className="font-extrabold text-3xl tracking-tight mb-4">About</h1>
      <p className="text-gray-600 dark:text-gray-200 mb-4">
        Hi, I’m Shen Lu 👋, a developer, writer and creator. Now I’m focusing on
        web development and data visualization.
      </p>
      <hr className="my-4 dark:border-gray-600" />
      <h2 className="font-extrabold text-2xl tracking-tight mb-4">
        Publications
      </h2>
      <strong className="mb-4">
        Searching large-scale scRNA-seq databases via unbiased cell embedding
      </strong>

      <p className="text-gray-600 dark:text-gray-200 mb-4">
        Zhi-Jie Cao, Lin Wei, <strong>Shen Lu</strong>, De-Chang Yang, Ge Gao{' '}
        {` `}
        <Link
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:dark:text-blue-600 underline"
          target="_blank"
          href="https://doi.org/10.1038/s41467-020-17281-7"
        >
          [Nature Communications]
        </Link>
      </p>
      <strong className="mb-4">
        Genomic Architecture of Cells in Tissues (GeACT): Study of Human
        Mid-gestation Fetus
      </strong>
      <p className="text-gray-600 dark:text-gray-200 mb-4">
        Feng Tian, Fan Zhou, Xiang Li, Wenping Ma, Honggui Wu, Ming Yang, Alec
        R. Chapman, David F. Lee, Longzhi Tan, Dong Xing, Guangjun Yin, Ayjan
        Semayel, Jing Wang, Jia Wang, Wenjie Sun, Runsheng He, Siwei Zhang,
        Zhijie Cao, Lin Wei, <strong>Shen Lu </strong>, Dechang Yang, Yunuo Mao,
        Yuan Gao, Kexuan Chen, Yu Zhang, Xixi Liu, Jun Yong, Liying Yan, Yanyi
        Huang, Jie Qiao, Fuchou Tang, Ge Gao, X. Sunney Xie {` `}
        <Link
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 hover:dark:text-blue-600 underline"
          target="_blank"
          href="https://www.biorxiv.org/content/10.1101/2020.04.12.038000v1"
        >
          [bioRxiv]
        </Link>
      </p>
    </div>
  )
}
