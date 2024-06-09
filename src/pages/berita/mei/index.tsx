import Image from "next/image";

const Mei = () => {
  return (
    <div className="container bg-grey-secondary">
      <div className="relative mb-16">
        <Image
          alt=""
          src="/berita.png"
          width={1000}
          height={1000}
          className="w-full h-[650px] mt-10 mb-16 object-cover bg-center"
        />
        <div className="absolute max-w-[950px] bottom-16 px-10 text-white">
          <div className="">
            <span className="flex items-center gap-2">
              <i className="bx bx-time-five" />
              <p>Mei 6, 2024</p>
            </span>
          </div>
          <h1 className="text-3xl font-semibold mt-5">
            MANAJEMEN PSS SLEMAN SAMPAIKAN SELAMAT DAN SUKSES COACH SETO LATIH
            PSIM
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[1050px]">
          <p>
            PSSLEMAN.ID, SLEMAN – PSIM Yogyakarta secara resmi menunjuk Seto
            Nurdiyantoro sebagai pelatih kepala untuk mengarungi Liga 2 musim
            2024/25. Manajemen PSS Sleman selaku tim yang pernah dilatih oleh
            Coach Seto mengucapkan selamat dan sukses untuk pelatih asal Sleman
            tersebut. “Kami dari manajemen PSS mengucapkan selamat untuk Coach
            Seto yang akan melatih PSIM musim depan. Semoga beliau sukses dan
            apa yang menjadi tujuannya bisa terwujud,” ujar Presiden Direktur PT
            Putra Sleman Sembada (PT PSS), Gusti Randa di Omah PSS, Sleman,
            Senin (6/5/2024) siang. Lebih lanjut, Gusti menyebutkan ucapan ini
            merupakan bagian dari guyubnya sepak bola di Yogyakarta untuk bisa
            terus berkembang lebih baik. “Coach Seto kita tahu merupakan legenda
            di sepak bola Yogyakarta baik sebagai pemain maupun pelatih.
            Jasa-jasa beliau yang membuat kami mendoakannya selalu sukses di
            manapun berada,” terangnya. “Semoga dengan ini sepak bola di
            Yogyakarta bisa terus rukun. Tidak lupa untuk bisa menjadi lebih
            baik dan berprestasi ke depannya,” sambungnya. Coach Seto pernah
            melatih Laskar Sembada pada musim 2017 hingga 2019 dan berlanjut
            pada musim 2022/23. Dalam kurun waktu itu, Pelatih berlisensi AFC
            Pro tersebut berhasil membawa PSS naik kasta ke Liga 1. “Sekali lagi
            selamat untuk Coach Seto dan semoga sukses di PSIM. Tentu tidak
            mudah untuk mencapai tujuan tapi tentu daya juang yang Coach Seto
            akan berikan pasti akan terwujud,” pungkasnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mei;
