import { notFound } from "next/navigation";

const NewsDetails = async({params}: {params: {newsId:string}}) => {
    const {newsId} = await params

    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)

    const data = await res.json() 

    const news = data.data 
    if(!news) {
        notFound()
    }

   
    return (
        <div>
            <h1>{news.title}</h1>
            {/* image */}


            <p>{news.text}</p>
        </div>
    );
};

export default NewsDetails;