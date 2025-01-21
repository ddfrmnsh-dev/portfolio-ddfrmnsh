import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiMysql } from "react-icons/si";
export default function AboutMeSection() {
  const techStack = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Golang", icon: <FaGolang /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "MysqlDB", icon: <SiMysql /> },
  ];

  return (
    <>
      <div className="w-full px-4 mb-6">
        <h4 className="font-bold uppercase text-primary text-2xl my-3">
          Tentang Saya
        </h4>
        <h2 className="font-bold text-dark text-xl md:text-2xl mb-5">
          Deskripsi Singkat Mengenai Saya 😀
        </h2>
        <p className="font-medium text-secondary w-full text-md text-justify">
          Saya memiliki pengalaman kerja sebagai Quality Assurance (QA) selama 2
          tahun dalam industri booking tiket dan perbankan, selain itu saya juga
          memiliki pengalaman sebagai Web Developer di salah satu organisasi di
          bidang pendidikan untuk sistem manajemen siswa dan pengajar.
        </p>
        {/* <p className="font-medium text-secondary w-full text-md text-justify">
          Seorang Fresh Graduate, Jurusan Information System dengan pengalaman
          mengembangkan Website dengan CMS/LMS ataupun dengan framework. Saya
          merupakan pribadi yang cermat dan teliti dalam bekerja. Bisa cepat
          beradaptasi dengan pekerjaan tim maupun individual.
        </p> */}
      </div>
      <div className="w-full px-4 mb-6">
        <h3 className="font-semibold text-dark text-2xl mb-4">
          Mari berteman dengan saya !
        </h3>
        <p className="font-medium text-secondary w-full text-md text-justify">
          Tak kenal maka Tak sayang, pepatah yang sering kita dengar dalam
          kehidupan sehari - hari. Saya Dede Firmansah Mahasiswa Universita Budi
          Luhur dan saya berasal dari{" "}
          <span>
            <a
              href="https://id.wikipedia.org/wiki/Kota_Tangerang"
              className="font-bold text-neutral-500"
            >
              Kota Tangerang
            </a>
          </span>
          , Saya memiliki hobi berpetualang dari menyusuri Alam dan melakukan
          hiking di beberapa Gunung / Bukit.
        </p>
      </div>
      <div className="w-full px-4 mb-6">
        <h3 className="font-semibold text-dark text-2xl mb-4">Tech Stack 👨‍💻</h3>
        {/* <p className="font-medium text-secondary w-full text-md text-justify">
          Tak kenal maka Tak sayang, pepatah yang sering kita dengar dalam
          kehidupan sehari - hari. Saya Dede Firmansah Mahasiswa Universita Budi
          Luhur dan saya berasal dari{" "}
          <span>
            <a
              href="https://id.wikipedia.org/wiki/Kota_Tangerang"
              className="font-bold text-neutral-500"
            >
              Kota Tangerang
            </a>
          </span>
          , Saya memiliki hobi berpetualang dari menyusuri Alam dan melakukan
          hiking di beberapa Gunung / Bukit.
        </p> */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow rounded-lg text-center flex flex-col items-center"
            >
              <div className="text-3xl text-primary">{tech.icon}</div>
              <p className="mt-2 font-medium text-gray-700">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
