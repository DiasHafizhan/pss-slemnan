import Button from "../../Ui/Button";
import BeritaWrapper from "./BeritaWrapper";

const BeritaLayout = () => {
  return (
    <div className="mt-20 mb-24 w-full">
      <h1 className="pb-10 text-4xl font-semibold text-primary">Berita</h1>
      <div className="flex w-full gap-4 flex-wrap">
        <div className="w-[48%]">
          <BeritaWrapper
            berita="/berita.png"
            title="PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            deleniti maiores ducimus, inventore quisquam ullam officiis quae
            sapiente quam, consequuntur impedit."
            font="text-xl"
            date="12 april 2023"
            classname="px-3 py-2"
          />
        </div>

        <div className="w-1/2 flex justify-between flex-wrap gap-2">
          <div className="w-[48%]">
            <BeritaWrapper
              berita="/berita.png"
              title="PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI"
              font="text-sm"
              date="12 april 2023"
              classname="w-full"
            />
          </div>
          <div className="w-[48%]">
            <BeritaWrapper
              berita="/berita.png"
              title="PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI"
              font="text-sm"
              date="12 april 2023"
              classname=" w-full"
            />
          </div>
          <div className="w-[48%]">
            <BeritaWrapper
              berita="/berita.png"
              title="PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI"
              font="text-sm"
              date="12 april 2023"
              classname=" w-full"
            />
          </div>
          <div className="w-[48%]">
            <BeritaWrapper
              berita="/berita.png"
              title="PELATIH KEPALA PSS JAGA MOTIVASI PEMAIN PADA PENUNDAAN KOMPETISI"
              font="text-sm"
              date="12 april 2023"
              classname=" w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-10">
        <Button classname="text-white bg-primary transition-all duration-200 hover:px-6 hover:py-3 ">
          Selengkapnya
        </Button>
      </div>
    </div>
  );
};

export default BeritaLayout;
