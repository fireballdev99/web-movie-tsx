import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Layout from "../../components/Layout";
import { TagsDetail, Movie, Tag } from "../../models/Model";
import { findMovie, getAllMovies, getAllTags } from "../api/api";

interface Props {
  movies: Movie;
  tags: Tag[];
}

const Play: NextPage<Props> = ({ movies, tags }) => {
  const router: NextRouter = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <Head>
        <title>RSU Movie</title>
        <meta name="description" content="ดูหนังออนไลน์ม.รังสิต" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container py-5 mx-auto">
        <header className="p-5">
          <h1 className="text-white text-xl">{movies.name}</h1>
        </header>
        <main className=" grid grid-cols-12 gap-2 text-white">
          <div className="col-span-12 md:col-span-12 h-full p-2 lg:col-span-9 bg-stone-900 bg-opacity-70 pb-12">
            <div className="pl-0 md:px-1 lg:px-1 xl:px-4 2xl:px-2">
              <section className="text-white body-font overflow-hidden">
                <div className="container xl:ml-4 lg:ml-18 px-5 py-8 md:ml-0 mx-auto">
                  <div className="lg:w-4/5 justify-center items-center md:justify-center sm:justify-center mx-auto flex flex-wrap">
                    <img
                      alt={movies.name}
                      className="object-cover object-center rounded border border-gray-200"
                      src={movies.coverImageUrl}
                    />
                    <div className="lg:w-1/2 sm:text-center text-center md:text-center w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                      <h2 className="text-sm  title-font text-gray-500 tracking-widest">
                        เก็บไว้ใส่ประเภท (ซีรีย์เกาหลี)
                      </h2>
                      <h1 className="text-white text-3xl title-font font-medium mb-1">
                        {movies.name}
                      </h1>
                      <div className="flex mb-4 md:justify-center justify-center sm:justify-center">
                        <span className="flex items-center">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            className="w-4 h-4 text-red-500"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                          </svg>
                          <span className="text-gray-300 ml-3">
                            187 Reviews
                          </span>
                        </span>
                        <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                          <a className="text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                      <p className="leading-relaxed">{movies.description}</p>
                      <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div className="flex">
                          <span className="mr-3">ประเภทหนัง : </span>
                          {movies.tagsDetail.map((item) => (
                            <Link key={item.tagId} href="/">
                              <a className="pr-3 hover:text-red-700">
                                {item.name}
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="text-white body-font overflow-hidden">
                <div className="container mx-auto">
                  <iframe
                    className="relative inset-0 w-full min-h-[262px] sm:min-h-[350px] md:min-h-[415px] xl:min-h-[510px] 2xl:min-h-[630px]"
                    title="TEST"
                    src="https://drive9x.com/video/6B5042E51EEE1bB/"
                    frameBorder="0"
                    scrolling="no"
                  />
                </div>
              </section>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3 bg-stone-900 bg-opacity-70">
            <div>
              <div className="p-5 text-3xl">
                <h1>ประเภทหนัง</h1>
              </div>
              <div className="mt-0 w-80 lg:w-52 xl:w-64 pl-12 pb-2">
                <ul className="text-lg font-bold text-gray-300">
                  {tags.map((item) => (
                    <Link key={item.tagId} href="/">
                      <a>
                        <li className="border-b-[1px] border-b-neutral-600 p-2 max-w-5 hover:text-red-700">
                          {item.name}
                        </li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Play;

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const resMov = await getAllMovies();
  const movies: Movie[] = await resMov;

  const paths = movies.map((items) => ({
    params: { id: items.productId.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: any = context.params;
  const resMov = await findMovie(id);
  const resTag = await getAllTags();
  const movies: Movie = await resMov;
  const tags: Tag[] = await resTag;

  return {
    props: {
      movies,
      tags,
    },
  };
};
