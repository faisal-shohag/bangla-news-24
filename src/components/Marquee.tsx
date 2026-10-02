import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    id: string
    title: string
}

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json() 
    const headlines:Headlines[] = data.data
    return (
        <div className="bg-red-700 text-white">

            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>

            <MarqueeText className="py-1" direction="right" duration={10}>
            
            {headlines.map(h => <Link className="hover:underline" href={`/news/${h.id}`} key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
            </Link>)}

            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;