import React, { useEffect, useState } from "react";
import { SearchIcon, PlayCircleIcon, HeartIcon } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  //   const navigate = useNavigate();
  return (
    <div
      className={`flex justify-between navbar items-center navbar-${show} gap-8 `}
    >
      <div className="md:block hidden w-3/12 ">
        <p
          className="text-[#c0c0c0] text-[42px] font-semibold italic cursor-pointer"
          onClick={() => {
            navigate("/");
            setQuery("");
          }}
        >
          Kazokku
        </p>
      </div>
      <div className="md:flex hidden xl:w-full lg:w-3/12    gap-[42px]">
        <div className="flex items-center gap-5">
          <SearchIcon size={18} color="#00ff7f" />
          <div>
            <p className="text-[#00ff7f] font-semibold text-xl">Overview</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex hidden xl:w-full lg:w-3/12    gap-[42px]">
        <div className="flex items-center gap-5">
          <PlayCircleIcon size={18} color="#00ff7f" />
          <div>
            <p className="text-[#00ff7f] font-semibold text-xl">Watch</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex hidden xl:w-full lg:w-3/12    gap-[42px]">
        <div className="flex items-center gap-5">
          <HeartIcon size={18} color="#00ff7f" />
          <div>
            <p className="text-[#00ff7f] font-semibold text-xl">Detox</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
