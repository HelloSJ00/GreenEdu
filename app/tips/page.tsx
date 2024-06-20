import React from "react";

const page = () => {
  const videos = [
    {
      title:
        "제로웨이스트zero waste 이렇게만 도전하면 나도 할 수 있다! 쓰레기 줄이기!!ㅣ EP6-7",
      thumbnail:
        "https://i.ytimg.com/vi/rsd5seVp-9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACF7deg_ledwT6GeIzkJjvFXrdkg",
      link: "https://www.youtube.com/watch?v=rsd5seVp-9I&pp=ygUX7JOw66CI6riwIOykhOydtOuKlCDtjIE%3D",
    },
    {
      title:
        "Eng)쓰레기 줄이는 6가지 살림팁•용기내챌린지 • Six ways to reduce waste",
      thumbnail:
        "https://i.ytimg.com/vi/hGMuY5Mbww4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPIkSIA669qZwNQoj70_NP821aoA",
      link: "https://www.youtube.com/watch?v=hGMuY5Mbww4",
    },
    {
      title: "[핫클립] 음식물 쓰레기 줄이는 방법 / YTN 사이언스",
      thumbnail:
        "https://i.ytimg.com/vi/V4iBu9VsoxM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_scwXCiwyKYBepfXz992UVSEGsw",
      link: "https://www.youtube.com/watch?v=V4iBu9VsoxM",
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

export default page;
