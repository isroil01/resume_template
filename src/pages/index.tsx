import Modern from "@/component/modern";
import dynamic from "next/dynamic";
import React from "react";
// const Modern = dynamic(() => import('@/component/modern'), { ssr: false });

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);


export default function Home() {

  return (
    <div >
      {/* <Modern /> */}
     <PDFDownloadLink document={<Modern />} fileName="my-document.pdf">
       Download now
    </PDFDownloadLink>
    </div>
  );
}
