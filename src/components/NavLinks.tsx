import Link from "next/link";

interface Navs {
    slug: string
    title: string
    topicId: string | null
    url:string
    scrapable: boolean
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs:Navs[] = data.data;
  const filteredNavs = navs.filter((n) => n.scrapable);
  return (
    <div className="flex gap-5 justify-center mt-5">
      <Link href={"/"}>হোম</Link>

      {filteredNavs.map((n, i) => (
        <Link key={i} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
