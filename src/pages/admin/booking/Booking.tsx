import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { BookingType } from "@/types";

export default function Booking() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState<BookingType[]>([]);
  const fetchBookings = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/feedback`
    );
    const data = await response.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);
  const handleDelete = async (id: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/feedback/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.success) {
      toast({
        title: "Success",
        description: "Booking deleted successfully",
      });
      await fetchBookings();
    } else {
      toast({
        title: "Error",
        description: "Booking not deleted",
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow
              key={b._id}
              onClick={() => navigate(`/admin/booking/${b._id}`)}
              className="hover:bg-muted transition cursor-pointer"
            >
              <TableCell>{b.name}</TableCell>
              <TableCell>{b.phone}</TableCell>
              <TableCell>{b.email}</TableCell>
              <TableCell className="line-clamp-1">{b.message}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(b._id);
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
