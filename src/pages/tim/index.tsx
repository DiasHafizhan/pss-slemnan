import TeamsLayout from "@/Components/Layout/Teams";

const TimPages = () => {
  return (
    <div className="mb-96">
      <div className="w-full bg-primary">
        <div className="container py-8 text-white">
          <h1 className="text-3xl font-semibold">PEMAIN</h1>
        </div>
      </div>
      <div className="container mt-10">
        <TeamsLayout />
      </div>
    </div>
  );
};

export default TimPages;
