import React, { useContext, useEffect, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { StoreContext } from "../context/FriendContext";

function Status() {
  const { timeline } = useContext(StoreContext);
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    const getData = () => {
      const getCall = timeline.filter((item) => item.type == "Call");
      const getText = timeline.filter((item) => item.type == "Text");
      const getVideo = timeline.filter((item) => item.type == "Video");

      setCall(getCall);
      setText(getText);
      setVideo(getVideo);
    };
    getData();
  }, []);

  const data = [
    { name: "Call", value: call.length, fill: "#2563eb" },
    { name: "Text", value: text.length, fill: "#475569" },
    { name: "Video", value: video.length, fill: "#4f46e5" },
  ];
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[75%] mx-auto py-20 ">
      <h1 className="font-bold text-[48px] text-[#1F2937] ">
        Friendship Analytics
      </h1>

      {!timeline.length ? (
        <div className="h-[70vh] flex justify-center items-center shadow shadow-gray-300 mt-4">
          <h3 className="font-bold text-3xl text-gray-400 ">No Data Added</h3>
        </div>
      ) : (
        <div className=" shadow-sm  border border-gray-300 mt-6 rounded-xl p-8">
          <p className="font-medium text-xl text-[#244d3f] ">
            By Interaction Type
          </p>
          <div className="flex justify-center items-center max-h-110">
            <PieChart
              style={{
                width: "100%",
                maxWidth: "280px",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="8px"
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                isAnimationActive={true}
              />{" "}
              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                fontSize={16}
                wrapperStyle={{ paddingTop: "30px" }}
              />
            </PieChart>
          </div>
        </div>
      )}
    </div>
  );
}

export default Status;
