"use client";

import Spinners from "@/components/Spinner";
import Cards from "@/components/ui/Cards";
import axios from "axios";
import { link } from "fs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type DataProps = {
  title: string;
  desc: string;
  img: string;
  id: string;
  bg: string;
  showButton: boolean;
  linkExternal: boolean;
  link: string;
  techStack: string[];
};

export default function Page() {
  const [dataProject, setDataProject] = useState<DataProps[]>([]);
  const [dataFreelance, setDataFreelance] = useState<DataProps[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetchProject();
      setIsLoading(false);
    }, 1000);
  }, []);

  const fetchProject = async () => {
    try {
      const res = await axios.get("/json/data.json");
      setDataProject(res.data.dataProject);
      setDataFreelance(res.data.dataFreelance);
    } catch (e) {
      console.log("Gagal Fetch Data", e);
    }
  };
  return (
    <>
      <section id="personalProject">
        <div className="w-full my-5 bg-[url('/image/bg-personal-project.jpg')] bg-cover bg-center p-2 rounded-md">
          <div className="bg-orange-100 rounded-md bg-opacity-95 px-2 py-2 m-2">
            <h3 className="text-xl md:text-2xl font-semibold text-left mb-2 pl-2">
              Personal Project
            </h3>
            <p className="text-justify px-2 font-normal text-sm md:text-lg">
              Project pribadi yang saya kembangkan untuk mengasah keterampilan
              programming, mencakup penguasaan FE dan BE.
            </p>
          </div>
        </div>
        {isLoading ? (
          <Spinners />
        ) : (
          <div className="py-4">
            <div className="md:hidden snap-x snap-mandatory overflow-x-auto flex gap-4 pr-4">
              {(dataProject || []).map((item) => (
                <div
                  key={item.id}
                  className="snap-center flex-shrink-0 w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <Cards
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    img={`${item.img}`}
                    imgPosition={false}
                    classBg={item?.bg}
                    showButton={item?.showButton}
                    linkExternal={item?.linkExternal}
                    link={item?.link}
                    technologies={item?.techStack}
                  />
                </div>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4">
              {(dataProject || []).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 "
                >
                  <Cards
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    img={`${item.img}`}
                    imgPosition={false}
                    classBg={item.bg}
                    showButton={item?.showButton}
                    linkExternal={item?.linkExternal}
                    link={item?.link}
                    technologies={item?.techStack}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      <section id="freelanceProject">
        <div className="w-full my-5 bg-[url('/image/bg-freelance-project.jpg')] bg-cover bg-center  p-2 rounded-md">
          <div className="bg-orange-100 rounded-md bg-opacity-95 px-2 py-2 m-2">
            <h3 className="text-xl md:text-2xl font-semibold text-left mb-2 pl-2">
              Freelance Project
            </h3>
            <p className="text-justify px-2 font-normal text-sm md:text-lg">
              Project freelance yang saya kerjakan mencakup pengembangan CMS dan
              sistem manajemen organisasi, menggunakan berbagai tech stack
              ataupun framework.
            </p>
          </div>
        </div>
        {isLoading ? (
          <Spinners />
        ) : (
          <div className="py-4">
            <div className="md:hidden snap-x snap-mandatory overflow-x-auto flex gap-4 pr-4">
              {(dataFreelance || []).map((item) => (
                <div
                  key={item.id}
                  className="snap-center flex-shrink-0 w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
                >
                  <Cards
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    img={`${item.img}`}
                    imgPosition={false}
                    classBg={item?.bg}
                    showButton={item?.showButton}
                    linkExternal={item?.linkExternal}
                    link={item?.link}
                    technologies={item?.techStack}
                  />
                </div>
              ))}
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4">
              {(dataFreelance || []).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700 "
                >
                  <Cards
                    key={item.id}
                    title={item.title}
                    desc={item.desc}
                    img={`${item.img}`}
                    imgPosition={false}
                    classBg={item.bg}
                    showButton={item?.showButton}
                    linkExternal={item?.linkExternal}
                    link={item?.link}
                    technologies={item?.techStack}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
