import CustomProgressBar from "@/components/CustomProgressBar";

const AdminDashboard = () => {
  return (
    <div className="flex justify-between items-center w-full flex-wrap mb-10 gap-3">
      <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] pt-4">
        <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
          Temperatura(0&#176;C)
        </h3>
        <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
        <CustomProgressBar color="#6BB2D7FF" progress={50} />
      </div>
      <div className="flex-auto shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg pt-4">
        <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
          Suv sathi(sm)
        </h3>
        <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
        <CustomProgressBar color="#00FF00FF" progress={90.3} />
      </div>
      <div className="flex-auto h-[8rem] flex items-center flex-col justify-between text-center bg-[#fff] rounded-lg shadow-[0px_4px_10px_3px_rgba(0,0,0,0.1)] pt-4">
        <h3 className="text-[#a8a8a8] uppercase text-base font-semibold">
          Sho'rlanganligi(TDS)
        </h3>
        <p className="text-2xl text-[#757575FF] font-bold">18.6</p>
        <CustomProgressBar color="#82A6F6FF" progress={45.5} />
      </div>
    </div>
  );
};

export default AdminDashboard;
