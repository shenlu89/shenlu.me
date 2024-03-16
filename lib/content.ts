import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, basename, extname } from "path";
import readingTime from "reading-time";
import { parseISO, format } from "date-fns";

type Metadata = {
  title: string;
  date: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1");
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { frontMatter: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return readdirSync(dir).filter((file) => extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  let rawContent = readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  writeFileSync(
    join(process.cwd(), process.env.GENERATED_FILE as string),
    JSON.stringify(
      mdxFiles.map((file) => {
        let { frontMatter, content } = readMDXFile(join(dir, file));
        let slug = basename(file, extname(file));
        return {
          ...frontMatter,
          url: `/blog/${slug}`,
          slug,
          publishedAt: format(parseISO(frontMatter.date), "MMM dd, yyyy"),
          readingTime: readingTime(content).text,
          wordCount: content.split(/\s+/gu).length,
          content,
        };
      })
    )
  );
  console.log("successfully generated!");
}

getMDXData(join(process.cwd(), process.env.BLOG_DIRECTORY as string));
