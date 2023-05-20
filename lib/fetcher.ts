export default async function fetcher<JSON = any>(
  url: RequestInfo,
  options?: RequestInit
): Promise<JSON> {
  const res = await fetch(url, options)
  return res.json()
}
