"use client";

import Image from "next/image";
import Tab from "../tab";
import { db } from "@/lib/db/db";
import { useEffect, useState } from "react";
import { Klasemen, Tim } from "@prisma/client";

const KlasemenPages = () => {
  const [klasemen, setKlasemen] = useState<klasemenWithTim[] | null>(null);
  type klasemenWithTim = Klasemen & {tim: Tim}

  useEffect(() => {
    const getKlasemen = async () => {
      const res = await fetch("/api/klasemen");
      const data = await res.json();
      setKlasemen(data);
    };
    getKlasemen();
  }, []);

  console.log(klasemen);
  return (
    <div className="container mb-96">
      <Tab />
      <div className="flex justify-center items-center mb-10">
        <Image
          alt=""
          src="/logoliga.png"
          width={900}
          height={900}
          className="w-[90px]"
        />
      </div>
      <div className="">
        <table className="w-full text-left">
          <thead className="border-solid border-y-2">
            <tr>
              <th className="py-3 text-primary font-semibold">TEAM</th>
              <th className="pl-9 py-3 text-primary font-semibold">P</th>
              <th className="pl-9 py-3 text-primary font-semibold">W</th>
              <th className="pl-9 py-3 text-primary font-semibold">D</th>
              <th className="pl-9 py-3 text-primary font-semibold">L</th>
              <th className="pl-9 py-3 text-primary font-semibold">GD</th>
              <th className="pl-9 py-3 text-primary font-semibold">PTS</th>
            </tr>
          </thead>
          <tbody>
            {!klasemen
              ? null
              : klasemen.map((data, index) => (
                  <tr key={data.id} className={data.tim.name === "PSS Sleman" ? "bg-blue" : ""}>
                    <td className="flex items-center gap-5 py-3">
                      <p>{index+1}</p>
                      <span className="flex items-center gap-2">
                        <Image
                          alt=""
                          src={data.tim.image}
                          width={900}
                          height={900}
                          className="w-[25px]"
                        />
                        {data.tim.name}
                      </span>
                    </td>
                    <td className="pl-9 py-1">{data.totalGame}</td>
                    <td className="pl-9 py-1">{data.menang}</td>
                    <td className="pl-9 py-1">{data.seri}</td>
                    <td className="pl-9 py-1">{data.kalah}</td>
                    <td className="pl-9 py-1">{data.goalAgain}</td>
                    <td className="pl-9 py-1">{data.poin}</td>
                  </tr>
                ))}

            {/* <tr>
              <td className="flex items-center gap-5 py-3">
                <p>2</p>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src="/logoPss.png"
                    width={900}
                    height={900}
                    className="w-[25px]"
                  />
                  PSS SLEMAN
                </span>
              </td>
              <td className="pl-9 py-1">9</td>
              <td className="pl-9 py-1">0</td>
              <td className="pl-9 py-1">1</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
            </tr>
            <tr>
              <td className="flex items-center gap-5 py-3">
                <p>3</p>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src="/logoPss.png"
                    width={900}
                    height={900}
                    className="w-[25px]"
                  />
                  PSS SLEMAN
                </span>
              </td>
              <td className="pl-9 py-1">9</td>
              <td className="pl-9 py-1">0</td>
              <td className="pl-9 py-1">1</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
            </tr>
            <tr>
              <td className="flex items-center gap-5 py-3">
                <p>4</p>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src="/logoPss.png"
                    width={900}
                    height={900}
                    className="w-[25px]"
                  />
                  PSS SLEMAN
                </span>
              </td>
              <td className="pl-9 py-1">9</td>
              <td className="pl-9 py-1">0</td>
              <td className="pl-9 py-1">1</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
            </tr>
            <tr>
              <td className="flex items-center gap-5 py-3">
                <p>5</p>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src="/logoPss.png"
                    width={900}
                    height={900}
                    className="w-[25px]"
                  />
                  PSS SLEMAN
                </span>
              </td>
              <td className="pl-9 py-1">9</td>
              <td className="pl-9 py-1">0</td>
              <td className="pl-9 py-1">1</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
            </tr>
            <tr>
              <td className="flex items-center gap-5 py-3">
                <p>6</p>
                <span className="flex items-center gap-2">
                  <Image
                    alt=""
                    src="/logoPss.png"
                    width={900}
                    height={900}
                    className="w-[25px]"
                  />
                  PSS SLEMAN
                </span>
              </td>
              <td className="pl-9 py-1">9</td>
              <td className="pl-9 py-1">0</td>
              <td className="pl-9 py-1">1</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
              <td className="pl-9 py-1">2</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KlasemenPages;
