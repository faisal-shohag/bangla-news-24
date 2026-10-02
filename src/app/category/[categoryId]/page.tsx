import NewsCard from "@/components/NewsCard";
import { notFound } from "next/navigation";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const CategoryNews = async ({ params }: { params: { categoryId: string } }) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  const data = await res.json();

  const categoryNews: News[] = data.data;

    if(!categoryNews) {
        notFound()
    }



  return (
    <div>
      <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5">
        {data.title}
      </h1>

      <div className="grid grid-cols-3 gap-10">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
