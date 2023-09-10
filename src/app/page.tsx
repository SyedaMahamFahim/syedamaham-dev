import {
    HeroSection,
    HomeArticles,
    Snippets as SnippetsContainer,
} from "@/containers";
import { getPosts, getSnippets } from "@/utils/sanity-utils";
import { Loader } from "@/components";
import Await from "./await";
import { Suspense } from "react";

export default async function Home() {
    const articles = await getPosts();
    // const allSnippets = await getSnippets();
    // const promise = getPosts();
    return (
        <>
            <div
                className={
                    "font-regular bg-slate-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"
                }
            >
                <HeroSection />

                <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                            READ LATEST ARTICLES
                        </h1>

                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        <Suspense fallback={"Loading"}>
                            <HomeArticles
                                noOfArticle={3}
                                isArchive={true}
                                articles={articles}
                                isSeries={false}
                                isExternal={false}
                            />
                        </Suspense>
                    </div>
                </div>
                {/* <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                            EXPLORE LATEST SNIPPETS
                        </h1>
                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        <SnippetsContainer
                            isArchive={true}
                            snippets={allSnippets}
                            noOfSnippet={9}
                        />
                    </div>
                </div>  */}
            </div>
        </>
    );
}
