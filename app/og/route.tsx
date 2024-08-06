import { ImageResponse } from "next/og"; // App router includes @vercel/og.
// No need to install it.

import { HomePage } from "@/data/meta-data";

export const runtime = "edge";

export async function GET(request: Request) {
  // Make sure the font exists in the specified path:
  try {
    const extraBold = await fetch(
      new URL("../../public/fonts/Cantarell-ExtraBold.otf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const regular = await fetch(
      new URL("../../public/fonts/Cantarell-Regular.otf", import.meta.url)
    ).then((res) => res.arrayBuffer());
    const url = request.url.replaceAll("&amp%3B", "&");
    const { searchParams } = new URL(url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title") : "Shen Lu";

    // ?time=<time>
    const hasTime = searchParams.has("time");
    const time = hasTime ? searchParams.get("time") : "";

    // ?slug=<slug>
    const hasSlug = searchParams.has("slug");
    const slug = hasSlug ? searchParams.get("slug") : "";

    return new ImageResponse(
      (
        <div tw="flex flex-col bg-white w-full h-full justify-between p-16">
          <div tw="flex flex-col">
            <div tw="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  fill="transparent"
                  d="M-.5-.5h108C85.013.826 65.513 9.16 49 24.5c-15.218 18.55-19.885 39.55-14 63 3.294 11.084 9.46 20.25 18.5 27.5a267.454 267.454 0 0019 11 1309.041 1309.041 0 0145 18c10.855 6.271 12.855 14.605 6 25a25.471 25.471 0 01-9 4c-27.89 1.694-53.89-4.473-78-18.5-.06-.543-.393-.876-1-1-1.328 19.162-1.328 38.162 0 57 17.169 6.961 34.835 11.627 53 14h-89V-.5z"
                />
                <path
                  fill="transparent"
                  d="M124.5-.5h100v225h-111c20.345-.923 39.012-7.09 56-18.5 17.646-15.931 24.813-35.765 21.5-59.5-3.919-21.581-15.752-37.081-35.5-46.5a2367.03 2367.03 0 00-51-20c-9.704-5.643-11.371-12.976-5-22 8.188-4.15 16.855-5.483 26-4 18.598 2.033 36.265 7.2 53 15.5 1-19.655 1.333-39.322 1-59-17.973-6.128-36.306-9.795-55-11z"
                />
                <path
                  fill="#010101"
                  d="M107.5-.5h17c18.694 1.205 37.027 4.872 55 11 .333 19.678 0 39.345-1 59-16.735-8.3-34.402-13.467-53-15.5-9.145-1.483-17.812-.15-26 4-6.371 9.024-4.704 16.357 5 22a2367.03 2367.03 0 0151 20c19.748 9.419 31.581 24.919 35.5 46.5 3.313 23.735-3.854 43.569-21.5 59.5-16.988 11.41-35.655 17.577-56 18.5h-25c-18.165-2.373-35.831-7.039-53-14a784.621 784.621 0 011-56c24.11 14.027 50.11 20.194 78 18.5a25.471 25.471 0 009-4c6.855-10.395 4.855-18.729-6-25a1309.041 1309.041 0 00-45-18 267.454 267.454 0 01-19-11c-9.04-7.25-15.206-16.416-18.5-27.5-5.885-23.45-1.218-44.45 14-63C65.513 9.16 85.013.826 107.5-.5z"
                />
              </svg>
            </div>
            <div
              tw="text-6xl mt-8 font-extrabold tracking-tight mb-4"
              style={{ lineHeight: "70px" }}
            >
              {title}
            </div>
            <div tw="flex text-slate-600 text-3xl w-full justify-end">
              {time}
            </div>
          </div>
          <div tw="flex justify-between">
            <div tw="flex items-center">
              <img
                tw="w-24 h-24 rounded-full mr-8"
                src="https://shenlu.me/images/avatar.png"
                alt="Shen Lu"
              />
              <div tw="flex flex-col">
                <span tw="flex text-4xl font-extrabold mb-4">{HomePage.title}</span>
                <span tw="flex text-3xl text-gray-600">
                  {HomePage.description}
                </span>
              </div>
            </div>
            <div tw="flex items-center">
              <img
                tw="w-24 h-24"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://shenlu.me/blog/${slug}`}
              />
            </div>
          </div>
        </div>
      ),
      {
        fonts: [
          {
            name: "Cantarell",
            data: extraBold,
            weight: 800,
            style: "normal",
          },
          {
            name: "Cantarell",
            data: regular,
            weight: 400,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
