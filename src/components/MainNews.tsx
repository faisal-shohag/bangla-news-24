import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}


const MainNews = ({ news }: {news: News[]}) => {
  const [firstNews, ...otherNews] = news;

  //   const otherNews = news.slice(1)
    // console.log(otherNews)

  return (
    <div className="flex gap-2">
   <Link href={`/news/${firstNews.id}`}>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>
   </Link>

      <div className="grid gap-2">
        {otherNews.slice(0, 4).map((on) => (
          <div
            className="card bg-base-100 border border-gray-300 p-5"
            key={on.id}
          >
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            <div>{on.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
