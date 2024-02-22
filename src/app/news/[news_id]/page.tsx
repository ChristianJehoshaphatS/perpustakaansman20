import LoadPdf from "@/components/LoadDrivePdf";
import { BookModel, getDetail } from "@/db/models/Catalog";
import { NewsModel, getNewsDetail } from "@/db/models/News";
import Link from "next/link";

const BookDetail = async ({ params }: { params: { news_id: string } }) => {
  const { news_id } = params;
  //   console.log(catalog_id);
  const data = (await getNewsDetail(news_id)) as NewsModel;
  console.log(data);

  return (
    <main className="flex flex-col items-center w-full px-10 pt-[6rem] mb-10">
      <div className="flex flex-col items-center gap-10 w-full py-10 h-screen">
        <h1 className="text-3xl font-semibold">{data.title}</h1>
        <LoadPdf link={data?.pdfUrl} width={"100%"} height={"80%"} />
      </div>
      <div className="self self-end pr-[12.5rem]">
        <Link href={"/layanan/e-catalog"}>
          <button className="btn btn-warning text-[#1e2728] text-lg">
            Kembali
          </button>
        </Link>
      </div>
    </main>
  );
};

export default BookDetail;
