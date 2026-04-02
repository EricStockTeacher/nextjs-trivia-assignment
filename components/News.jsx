import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

const LATEST_NEWS_QUERY = defineQuery(`
  *[_type == "newsItem" && defined(slug.current) && defined(postedAt)]
    | order(postedAt desc)[0...4]{
      _id,
      title,
      postedAt,
      "slug": slug.current,
      shortenedContent
    }
`);

function formatPostedAt(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-CA", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function News() {
  const items = await client.fetch(LATEST_NEWS_QUERY);

  return (
    <section>
      <h2 className="text-xl font-semibold">News</h2>

      <table className="w-full table-fixed">
        <tbody>
          <tr>
            {items.map((item) => (
              <td key={item._id} className="align-top p-4 w-1/4">
                <Link href={`/news/${item.slug}`} className="font-semibold underline">
                  {item.title}
                </Link>

                <div className="text-sm opacity-80 mt-1">
                  {formatPostedAt(item.postedAt)}
                </div>

                <p className="mt-2">
                  {item.shortenedContent}
                </p>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}