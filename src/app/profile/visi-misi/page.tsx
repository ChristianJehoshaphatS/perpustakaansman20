import Image from "next/image";

export default function VisidanMisi() {
  return (
    <main className="bg-white h-full  w-full pt-[4rem] flex justify-center prose max-w-full">
      <div className="w-3/4 flex flex-col items-center">
        <h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
          Visi dan Misi Perpustakaan SMAN 20 Jakarta
        </h1>
        <br />
        <div className="w-1/2 px-1 h-1 bg-[#ffd31a]"></div>
        <br />
        <Image
          src={"/profile/vm.png"}
          width={800}
          height={1200}
          alt="Visi dan Misi"
        />
        <h1 className="text-3xl font-bold self-start text-center mt-10 text-black  w-full">
          Kata Sambutan Kepala Perpustakaan SMAN 20 Jakarta
        </h1>
        <div className="flex flex-row items-star">
          <div className="flex-col flex w-full items-center">
            <Image
              src={"/profile/kepalaperpus.jpg"}
              alt={""}
              width={1000}
              height={1200}
              className="h-auto w-3/4 object-contain"
            />
            <h1 className="text-xl text-black">Imas Gandasari, M.Pd</h1>
          </div>
          <p className="text-lg mt-10 lg:mt-5 text-black w-full px-[10%] lg:px-5">
            Assalamualaikum warahmatullahi wabarakatuh
            <br />
            Alhamdulillah, Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa
            untuk semua limpahan karunia-NYA sehingga peluncuran perpustakaan
            digital SMAN 20 Jakarta dapat terlaksana.
            <br />
            <br />
            Di tengah derasnya arus informasi, kami berharap kehadiran
            perpustakaan digital ini dapat menjadi sumber belajar yang
            menyenangkan untuk memenuhi kebutuhan informasi peserta didik dan
            tenaga pendidik dalam rangka peningkatan efektivitas dan efisiensi
            pembelajaran.
            <br />
            <br />
            Dalam kesempatan ini perkenankan kami mengucapkan terima kasih
            kepada semua pihak yang telah membantu proses pengembangan website,
            dari sekedar wacana hingga akhirnya mewujud nyata.
            <br />
            <br />
            Semoga perpustakaan digital SMAN 20 Jakarta ini dapat memberikan
            kontribusi yang baik bagi seluruh warga sekolah dan masyarakat yang
            mengakses layanan perpustakaan daring untuk senantiasa gemar membaca
            dan tetap semangat dengan budaya literasi. Akhirnya kami ucapkan
            selamat menikmati layanan perpustakaan digital SMAN 20 Jakarta.
            <br />
            <br />
            Selamat menemukan petualangan yang bermakna !!. Wassalamualaikum
            warahmatullahi wabarakatuh.
          </p>
        </div>
      </div>
    </main>
  );
}
