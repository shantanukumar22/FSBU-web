import { useEffect, useState, useCallback, useRef } from "react";

const InfiniteMovingCards = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  const items = [
    {
      image:
        "data:image/jpeg;base64,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",
      title: "Subscribe us on youtube ",
      link: "https://www.youtube.com/@FullstackClubBU",
    },
    {
      image:
        "https://yt3.googleusercontent.com/xtFup7f5rIFmnvTmgbYMz8Vnzw2d28ENvRUzykwLgXLs9yRmrOvNXmwdPIZDScxoTLipepE0=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
      title: "Subscribe us on youtube ",
      link: "https://www.youtube.com/@FullstackClubBU",
    },
    {
      image:
        "https://wallpapers.com/images/hd/linkedin-original-logo-uguy75g4cn12umgz.jpg",
      title: "Connect with us on linkedIn",
      link: "https://www.linkedin.com/company/fullstackbu/posts/?feedView=all",
    },
    {
      image:
        "https://www.adobe.com/express/learn/blog/media_181ecfbc6bad648dabb38acaa11dd8571cc05c1bb.png?width=1200&format=pjpg&optimize=medium",
      title: "Follow us on Instagram",
      link: "https://www.instagram.com/fullstackbu/",
    },
  ];

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        "forwards"
      );
    }
  }, []);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-duration", "25s");
    }
  }, []);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div className="bg- pt-10">
      <h2 className="text-black text-center text-4xl font-bold mb-2 py-10">
        Connect With Us
      </h2>
      <h2 className="text-black text-center px-10 sm:px-44 mb-10 text-md">
        Let&apos;s connect explore learn and share together
      </h2>

      <div
        ref={containerRef}
        className="relative z-20 ml-4 h-80 max-w-full overflow-hidden"
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 h-64 gap-4 py-4 w-max flex-nowrap ${
            start ? "animate-scroll" : ""
          } hover:[animation-play-state:paused]`}
        >
          {items.map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.title}
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <li
                key={idx}
                className="w-[250px] max-w-full relative rounded-2xl border border-b-4 flex-shrink-0 border-black px-6 py-6 md:w-[350px] dark:border-white"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-25 rounded-2xl"></div>
                <div className="relative z-20 flex items-end justify-center h-[200px] pb-4">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
