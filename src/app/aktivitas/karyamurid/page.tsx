import Image from "next/image";
import { promises as fs } from "fs";
import {
  DriveFileModel,
  getKaryaGuru,
  getKaryaSiswa,
} from "@/db/models/KaryaGuruSiswa";
import LoadPdf from "@/components/LoadDrivePdf";

export default async function KaryaSiswa() {
  const karyaSiswa = (await getKaryaSiswa()) as DriveFileModel[];
  // console.log(karyaSiswa);

  return (
    <main className="bg-white h-full  w-full pt-[4rem] flex justify-center prose max-w-full">
      <div className="w-3/4 flex flex-col items-center h-full">
        <h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
          Karya Murid
        </h1>

        <div className="flex flex-col gap-10">
          {karyaSiswa &&
            karyaSiswa.map((karya) => {
              return (
                <div
                  className="flex flex-col justify-center items-center gap-5 border-t-2 pt-5"
                  style={{ height: karyaSiswa.length * 100 }}
                  key={karya._id.toString()}
                >
                  <LoadPdf
                    key={karya._id.toString()}
                    link={karya.url}
                    width={"100%"}
                    height={"80%"}
                  />
                  <h1 className="text-xl font-semibold text-center">
                    {karya.title}
                  </h1>
                </div>
              );
            })}
        </div>
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}
