"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetHealthNewsService } from "@/services/heathNewsService";
import { DateFormat } from "../../../utils/dateFormat";

const HealthNews = () => {
    const { healthNewsList } = useSelector((state) => state.healthNewsData)
    const router = useRouter();
    const dispatch = useDispatch()
    const [articleImages, setArticleImages] = useState({});
    const [ulContent, setUlContent] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(GetHealthNewsService(page, 12))
    }, [page])

    const healthnewsClick = (url) => {
        router.push(`/health-news-details/${url}`)
    }

    useEffect(() => {
        if (healthNewsList?.health_news?.length > 0) {
            const extractedImages = {};
            healthNewsList.health_news.forEach((article, index) => {
                if (article.description) {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(article.description, "text/html");
                    const imgTags = doc.querySelectorAll("img");
                    const imgSources = Array.from(imgTags).map((img) => img.src);
                    extractedImages[index] = imgSources.length > 0 ? imgSources[0] : null;
                    const ulElements = doc.querySelectorAll("ul");

                    const extractedUL = Array.from(ulElements)
                        .map(ul => ul.outerHTML) // Get entire `<ul>` with `<li>` items
                        .join(""); // Combine multiple lists into a single string

                    setUlContent(extractedUL);
                }
            });
            setArticleImages(extractedImages);
        }
    }, [healthNewsList]);

    console.log('ulContent', ulContent);


    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className='flex flex-wrap'>
                <div className='w-full md:w-4/6 cursor-pointer' onClick={() => healthnewsClick(healthNewsList?.health_news?.[0]?.url)}>
                    {articleImages[0]?.endsWith(".svg") || articleImages[0]?.startsWith("data:image") ? (
                        <img src={articleImages[0]} alt="SVG Image" className="w-[100%] h-96 rounded p-4 object-cover mx-auto" />
                    ) : (

                        <img
                            src={articleImages[0] ? articleImages[0] : "/assets/no_image.png"}
                            alt="Article Image"
                            width={400}
                            height={400}
                            className="w-[100%] h-96 rounded p-4 object-cover mx-auto"
                        />

                    )}
                    <p className='p-3'>{healthNewsList?.health_news?.[0]?.title}</p>
                </div>
                <div className='w-full md:w-2/6 p-3'>
                    <h3 className='text-sm md:text-xl font-bold mb-4'>Latest News </h3>

                    {healthNewsList?.health_news?.map((article, i) => i < 3 && (
                        <div className="flex place-items-start mb-2 cursor-pointer" key={i} onClick={() => healthnewsClick(article?.url)}>
                            {articleImages[i]?.endsWith(".svg") || articleImages[i]?.startsWith("data:image") ? (
                                <img src={articleImages[i]} alt="SVG Image" className="w-24 h-24 object-cover" />
                            ) : (

                                <img
                                    src={articleImages[i] ? articleImages[i] : "/assets/no_image.png"}
                                    alt="Article Image"
                                    width={200}
                                    height={200}
                                    className="w-24 h-24 object-cover"
                                />

                            )}
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    {article?.title}
                                </h3>
                                <p className="mt-2 text-xs">{DateFormat(article?.date)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h2 className='text-md md:text-xl font-bold m-3'>Latest Health News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                {healthNewsList?.health_news?.map((article, i) => (
                    <div key={i} className="bg-[#F8F8F8] p-3 rounded-sm cursor-pointer"
                        onClick={() => healthnewsClick(article?.url)}>
                        <div className="flex place-items-start">
                            {articleImages[i]?.endsWith(".svg") || articleImages[i]?.startsWith("data:image") ? (
                                <img src={articleImages[i]} alt="SVG Image" className="w-24 h-24 object-cover" width={200}
                                    height={200} />
                            ) : (

                                <img
                                    src={articleImages[i] ? articleImages[i] : "/assets/no_image.png"}
                                    alt="Article Image"
                                    className="w-24 h-24 object-cover"
                                    width={200}
                                    height={200}
                                />

                            )}
                            <div className="ml-4 text-start">
                                <h3 className="font-bold text-sm">
                                    {article?.title}
                                </h3>
                                <p className="mt-2 text-xs">{DateFormat(article?.date)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HealthNews
