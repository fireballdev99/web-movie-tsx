/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout";
import { BsFillPlayFill } from "react-icons/bs";
import { getAllMovies, getAllTags } from "../pages/api/api";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import Image from "next/image";

type TagsDetail = {
  status: string;
  type: string;
  name: string;
  tagId: number;
};

type Movie = {
  subtitles: [];
  categories: [];
  tags: number[];
  status: string;
  timeDuration: number;
  coverImageUrl: string;
  productTotal: number;
  description: string;
  name: string;
  productId: number;
  updatedAt: Date;
  createdAt: Date;
  tagsDetail: TagsDetail[];
};

type Tag = {
  _id: string;
  status: string;
  type: string;
  name: string;
  tagId: number;
  updatedAt: Date;
  createdAt: Date;
};

export const getStaticProps = async () => {
  const resMov = await getAllMovies();
  const resTag = await getAllTags();
  const movies: Movie[] = await resMov;
  const tags: Tag[] = await resTag;

  return {
    props: {
      movies,
      tags,
    },
  };
};

const kseries = ({
  movies,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div className="container py-5 mx-auto">
        <header className="p-5">
          <h1 className="text-white text-xl">หนังอัพเดทใหม่ </h1>
        </header>
        <main className=" grid grid-cols-12 gap-2 text-white">
          <div className="col-span-12 md:col-span-12 p-2 lg:col-span-9 bg-stone-900 block bg-opacity-70 h-max">
            <div className="pl-0 md:pl-1 lg:pl-1 xl:pl-4 2xl:pl-2 grid grid-cols-2 gap-2 md:gap-0 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
              {movies?.map((item) => (
                <div
                  key={item.productId}
                  className="w-66 md:w-44 lg:w-44 xl:w-52 2lx:w-56 relative rounded overflow-hidden shadow-lg m-4 md:m-1 "
                >
                  <Link href="/">
                    <a>
                      <div className="grid active:-translate-y-1 transition ease-in-out delay-100 hover:-translate-y-2 hover:scale-110 duration-200 bg-black bg-opacity-50 place-items-center h-full w-full opacity-0 hover:opacity-100 absolute">
                        <BsFillPlayFill size={70} />
                      </div>
                      <img
                        className="object-cover w-full h-full"
                        src={item.coverImageUrl}
                        alt={item.name}
                      />
                      <div
                        className="absolute w-full max-h-20 py-1 bottom-0 inset-x-0 bg-stone-900 bg-opacity-80 text-white text-xs text-center leading-2
                      "
                      >
                        <h2 className="mb-3 pt-2 text-sm font-base tracking-tight text-white">
                          {item.name}
                        </h2>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-3 bg-stone-900 bg-opacity-70">
            <div>
              <div className="p-5 text-3xl">
                <h1>ประเภทหนัง</h1>
              </div>
              <div className="mt-0 w-80 lg:w-52 xl:w-64 pl-12 pb-2">
                <ul className="text-lg font-bold text-gray-300">
                  <Link href="/">
                    <a>
                      <li className="border-b-[1px] border-b-neutral-600 p-2 max-w-5 hover:text-red-700">
                        ชื่อ
                      </li>
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default kseries;
