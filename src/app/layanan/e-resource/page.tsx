import ExternalLink from "@/components/ExternalLink";

export default function EResource() {
  const links = [
    {
      title: "Koleksi Digital Perpustakaan Nasional Republik Indonesia",
      link: "https://www.perpusnas.go.id/",
    },
    {
      title:
        "Repositori Institusi Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      link: "https://repositori.kemdikbud.go.id/",
    },
    {
      title: "Sistem Informasi Perbukuan Indonesia",
      link: "https://buku.kemdikbud.go.id/",
    },
    {
      title: "Arsip Nasional Republik Indonesia",
      link: "https://anri.go.id/publikasi/majalah-arsip",
    },
    {
      title: "Literasi Digital Kementerian Komunikasi dan Informasi",
      link: "https://literasidigital.id/buku",
    },
    {
      title: "JDIH Provinsi DKI Jakarta",
      link: "https://jdih.jakarta.go.id/ ",
    },
  ];
  return (
    <main className="bg-white h-full  w-full pt-[4rem] flex justify-center prose max-w-full">
      <div className="w-3/4 flex flex-col items-center">
        <h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
          E-Resource dan Pranala Luar
        </h1>
        <br />
        <div className="w-1/2 px-1 h-1 bg-[#ffd31a]"></div>
        <br />

        <p className="text-lg font-semibold text-black lg:ml-[5rem]">
          &emsp; Perpustakaan digital SMA Negeri 20 Jakarta menyediakan bahan
          pustaka lebih dari seribu judul buku baik fiksi maupun non fiksi,
          serta buku pelajaran.
          <br />
          <br />
          Selain dari perpustakaan digital SMA Negeri 20 Jakarta, pengunjung
          juga dapat mencari bahan pustaka di berbagai sumber terpercaya untuk
          buku pelajaran, buku fiksi maupun non fiksi untuk memperkaya bahan
          bacaan, pendidikan maupun pengetahuan.
        </p>
        <h1 className="text-3xl font-bold self-start lg:ml-14 text-center mt-10 text-black">
          Links
        </h1>
        {links.map((link, i) => (
          <ExternalLink title={link.title} link={link.link} idx={i} />
        ))}
      </div>
    </main>
  );
}
