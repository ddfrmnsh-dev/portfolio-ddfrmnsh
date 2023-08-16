"use client";

import CardImg from "@/components/Card"
import Spinners from "@/components/Spinner";
import axios from "axios";
import React, { useEffect, useState } from "react";

// type Props = {}

interface Props {
  title: string;
  desc: string;
  img: string;
  id: number;
}

export default function Page({title, desc, img}: Props, key: any) {
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
      // console.log("haha", res)
      setData(res.data)
    } catch (e) {
      console.log("Gagal Fetch Data", e)
    }
  };
  return (
    <div className="container">
      {isLoading ? <Spinners/> : <>{data.map(item =>(<CardImg key={item.id} title={item.title} desc={item.desc} img={item.img}/>))}</>}
    </div>
  )
}