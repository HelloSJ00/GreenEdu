import React from "react";

const Learn = () => {
  const videos = [
    {
      title: "[수업]야나두! 프로젝트학습-우리는 환경보호가",
      thumbnail:
        "https://i.ytimg.com/vi/_MeiMRZCGJw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD50rnfxEpDRu_tAD3ldpK71xue3g",
      link: "https://www.youtube.com/watch?v=_MeiMRZCGJw&pp=ygUe7ZmY6rK9IOuztO2YuCDtmZzrj5kg67Cw7Jqw6riw",
    },
    {
      title:
        "지구를 지켜라 자연친화적 유치원 환경교육|충북 에듀 PLAY| 충북교육뉴스",
      thumbnail:
        "https://i.ytimg.com/vi/5EVx_723368/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHfNUlo9Vgm-HQ7w7Fblshso0pyQ",
      link: "https://www.youtube.com/watch?v=5EVx_723368",
    },
    {
      title:
        "5분 안에 할 수 있는 친환경 활동!|안물안 EP.14 특명 지구를 지켜라!",
      thumbnail:
        "https://i.ytimg.com/vi/Xp3SasADtE0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpeZ2lDApAlj6m70ejU6Qt2Rt_zw",
      link: "https://i.ytimg.com/vi/Xp3SasADtE0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpeZ2lDApAlj6m70ejU6Qt2Rt_zw",
    },
  ];

  return (
    <div className="w-[400px] space-y-4">
      {videos.map((video, index) => (
        <a
          key={index}
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{video.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Learn;
