import Image from "next/image";
import Button from "../../Ui/Button";
import VideoPlayer from "./PlayerVideo";

const ChannelYt = () => {
  return (
    <div className="bg-primary text-white w-full mb-16">
      <div className="container py-7">
        <h1 className="text-3xl font-semibold mb-5 mt-7">YouTube Channel</h1>
        <div className="w-full flex justify-between mb-8">
          <VideoPlayer youtubeId="https://www.youtube.com/watch?v=v0f6ju2zpws&t=2s" />
          <VideoPlayer youtubeId="https://www.youtube.com/watch?v=imA2gwfrPvA" />
          <VideoPlayer youtubeId="https://www.youtube.com/watch?v=v0f6ju2zpws&t=2s" />
        </div>
        <div className="w-full flex justify-between items-center mb-5 px-14">
          <div className="">
            <h1 className="text-3xl font-semibold mb-3">PSS TV</h1>
            <p>Menonton dan mendengarkan pertandingan langsung</p>
          </div>
          <Button classname="border border-white hover:bg-white hover:text-primary transition duration-300">
            Subscribe now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChannelYt;
