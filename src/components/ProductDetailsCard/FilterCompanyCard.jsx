import Link from "next/link";

const FilterCompanyCard = () => {
  const companys = [
    { id: 1, name: "Hetero drugs limited",url: "/manufacturer-list/hetero-drugs-limited" },
    { id: 2, name: "Natco pharma ltd",url: ""  },
    { id: 3, name: "Dr reddys laboratories ltd",url: ""  },
    { id: 4, name: "Emcure pharmaceuticals ltd",url: ""  },
    { id: 5, name: "Mylan pharmaceuticals",url: ""  },
    { id: 6, name: "Cipla ltd",url: ""  },
    { id: 7, name: "Cadila healthcare ltd",url: ""  },
    { id: 8, name: "Strides shasun limited",url: ""  },
    { id: 9, name: "Sun pharmaceutical industries limited",url: ""  },
    { id: 10, name: "Biocon",url: ""  },
    { id: 11, name: "Lupin ltd",url: ""  },
    { id: 12, name: "Alkem laboratories limited",url: ""  },
    { id: 13, name: "Aprazer healthcare pvt ltd",url: ""  },
    { id: 14, name: "Wockhardt ltd",url: ""  },
    { id: 15, name: "Zuventus healthcare ltd",url: ""  },
  ];

  return (
    <>
      <div className="text-center bg-[#35A24D] p-2 mt-10 border-b-2 px-4">
        <h2 className="text-xl text-white font-bold ps-7">
          Filter By Company
        </h2>
      </div>
      <div className="items-center justify-start gap-2 border-[1.5px] mb-10 h-[50vh] overflow-auto">
        {companys.map((company, i) => (
          <Link href={company?.url}>
            <div className="py-3 border-b-[1.5px] pb-2" key={i}>
                  <h3 className="font-bold text-sm ml-2">{company?.name}</h3>
                </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default FilterCompanyCard;