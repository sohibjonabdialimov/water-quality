import { fetchInfo } from "@/api/root";
import { ActionButtons } from "@/components/admin/ActionButtons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataFormat } from "@/utils/dataFormat";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    width: "",
  },
  {
    title: "O'lchangan vaqti",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (text: string) => <a>{text}</a>,
    width: "15%",
  },
  {
    title: "Suv sathi, (sm)",
    dataIndex: "waterLevel",
    key: "waterLevel",
  },
  {
    title: <p>Temperatura, (0&#176;C)</p>,
    dataIndex: "temperature",
    key: "temperature",
  },
  {
    title: "Sho'rlanganligi, (TDS)",
    dataIndex: "tds",
    key: "tds",
  },
  {
    title: "Amallar",
    key: "actions",
  },
];

const InfoList = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["info-data"],
    queryFn: fetchInfo,
  });
  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin" />
      </div>
    );
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <Table className="rounded-b-[15px] border-collapse min-w-max border-spacing-0 overflow-hidden shadow-sm p-4">
        <TableHeader className="bg-bgDark">
          <TableRow className="shadow-2xl">
            {columns.map((column) => (
              <TableHead className="text-start" key={column.key}>
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow className="bg-[#fff] hover:bg-[#F5F6FA]" key={item._id}>
              <TableCell className="font-medium border-b border-[#E4E6EE] pl-6">
                {index + 1}
              </TableCell>
              <TableCell className="border-b border-[#E4E6EE]">
                {dataFormat(item.createdAt)}
              </TableCell>
              <TableCell className="border-b border-[#E4E6EE]">
                {item.waterLevel}
              </TableCell>
              <TableCell className="border-b border-[#E4E6EE]">
                {item.temperature}
              </TableCell>
              <TableCell className="border-b border-[#E4E6EE]">
                {item.tds}
              </TableCell>
              <TableCell className="border-b border-[#E4E6EE]">
                <ActionButtons refetch={refetch} item={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InfoList;
