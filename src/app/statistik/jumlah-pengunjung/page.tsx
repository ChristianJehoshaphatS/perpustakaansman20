import Image from "next/image";
import { promises as fs } from "fs";
import {
  DriveFileModel,
  getKaryaGuru,
  getKaryaSiswa,
} from "@/db/models/KaryaGuruSiswa";
import LoadPdf from "@/components/LoadDrivePdf";

export default async function StatsPengunjung() {
  // console.log(karyaSiswa);

  return (
    <main className="bg-white h-full  w-full pt-[6rem] flex justify-center prose max-w-full">
      <div className="w-3/4 flex flex-col items-center h-full">
        <h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
          Statistik Jumlah Pengunjung
        </h1>

        <div className="flex flex-col gap-10 w-full p-10 min-h-screen">
          <div className="flex flex-col justify-center items-center gap-5 border-t-2 pt-5 h-[200dvh]">
            <h1 className="text-xl font-semibold text-center">
              {"Data Kunjungan"}
            </h1>
            <LoadPdf
              link={
                "https://drive.google.com/file/d/1kuRA-AfRB8njGdL7E2nQtCh1J9Z7k24r/view?usp=drive_link"
              }
              width={"100%"}
              height={"80%"}
            />

            <h1 className="text-xl font-semibold text-center">
              {"Data Peminjam"}
            </h1>
            <LoadPdf
              link={
                "https://drive.google.com/file/d/1HIhzpQ15b7GfQVIOzilNQVy1qiTimC4I/view?usp=drive_link"
              }
              width={"100%"}
              height={"80%"}
            />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </main>
  );
}
