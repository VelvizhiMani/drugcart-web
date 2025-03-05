"use client";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { IMAGES } from "@/components/common/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import TocIcon from "@mui/icons-material/Toc";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { GetManufactuerService } from "@/services/manufactuerService";

const ManufactuerList = () => {
  const { manufactuerList } = useSelector((state) => state.manufactuerData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    dispatch(GetManufactuerService(1, 113));
  }, [1, 113]);

  const ManufactuerIcons = [
    {
      id: 1,
      Icons: <ListAltIcon />,
    },
    {
      id: 2,
      Icons: <PlaylistAddCheckIcon />,
    },
    {
      id: 3,
      Icons: <FeaturedPlayListIcon />,
    },
    {
      id: 4,
      Icons: <TocIcon />,
    },
    {
      id: 5,
      Icons: <ReceiptLongIcon />,
    },
    {
      id: 6,
      Icons: <SpeakerNotesIcon />,
    },
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold">
          <h2>Search Manufacturer Name</h2>
          <div className="flex justify-center gap-2 my-4">
            {alphabet.map((letter, i) => (
              <button
                className={`${
                  selectedLetter === letter ? "bg-[#B7084B]" : "bg-[#35A24D]"
                } px-2 text-white rounded-md`}
                key={i}
                onClick={() => setSelectedLetter(letter)}
              >
                {letter}
              </button>
            ))}
            <button
              className={`${
                selectedLetter === "All" ? "bg-[#B7084B]" : "bg-[#35A24D]"
              } px-2 text-white rounded-md`}
              onClick={() => setSelectedLetter("All")}
            >
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-4">
          {manufactuerList?.manufactuers?.map((row, i) => (
            <div
              key={i}
              className="grid border-[1.5px] p-4 cursor-pointer bg-white border-gray-200 py-5"
            >
              <ListAltIcon
                className="mx-auto opacity-30 text-[red]"
                style={{ fontSize: "40px" }}
              />
              <p className="text-center font-bold">
                <span>{row.manufactuername}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ManufactuerList;
