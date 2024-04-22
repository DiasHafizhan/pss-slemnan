import Image from "next/image";
import Link from "next/link";

const Table = () => {
  return (
    <div className="w-full px-2 py-5 flex flex-col text-white">
      <div className="flex justify-between text-white mb-2">
        <h1 className="font-semibold">Klasemen</h1>
        <Link href="" className="font-semibold">
          Selengkapnya
        </Link>
      </div>
      <table className="text-left">
        <tr>
          <th>CLUB</th>
          <th>P</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
        <tr>
          <td>
            <Image alt="" src="/logoPss.png" width={900} height={900} className="w-[30px]"/>
          </td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
