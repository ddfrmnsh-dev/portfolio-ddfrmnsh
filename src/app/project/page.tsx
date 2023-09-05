"use client";

import CardImg from "@/components/Card"
import Spinners from "@/components/Spinner";
import axios from "axios";
import Head from "next/head";
import {Helmet} from "react-helmet";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  desc: string;
  img: string;
  id: string;
}

export default function Page() {
  const [data, setData ] = useState<Props[]>([]); 

  const [isLoading , setIsLoading ] = useState(true); 

  useEffect( ()=>{
    
    setTimeout( ()=> {
      fetchProject()
      setIsLoading(false)
    }, 1000)
  }, [])

  const fetchProject = async ()=> {
    try {
      const res = await axios.get('/json/data.json');
      setData(res.data)
    } catch (e) {
      console.log("Gagal Fetch Data", e)
    }
  };
  return (
    <>
    <div className="container w-full xl:w-1/2 mt-4 ">
      <div className="w-full my-5 bg-orange-100 p-2 rounded-md">
        <h6 className="bg-primary rounded-md w-1/5 mb-2 py-1 px-2 text-left font-semibold uppercase">Project</h6>
        <h5 className="text-2xl font-medium text-left mb-2 pl-2">Berikut Project yang pernah saya kerjakan</h5>
        <p className="text-justify px-2 font-extralight">Saya telah membuat Web Eccomerce, Decision Support System dan Desain untuk Content Media Social.</p>
      </div>
      {isLoading ? <Spinners/> : <>{data.map(item =>(<CardImg key={item.id} title={item.title} desc={item.desc} img={`/image/${item.img}`}/>))}</>}
    </div>
    </>
  )
}