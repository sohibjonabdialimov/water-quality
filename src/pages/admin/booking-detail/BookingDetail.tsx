import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trash2 } from "lucide-react";
import { useEffect } from "react";
import { BookingType } from "@/types";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function BookingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState<BookingType | null>(null);

  useEffect(() => {
    const fetchBooking = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/feedback/${id}`
      );
      const data = await response.json();
      setBooking(data);
    };
    fetchBooking();
  }, [id]);

  if (!booking) {
    return <div>Booking not found</div>;
  }

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
      navigate("/admin/booking");
    } else {
      toast({
        title: "Error",
        description: "Booking not deleted",
      });
    }
  };
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </Button>
      <Card className="shadow-lg border border-gray-200">
        <CardContent className="space-y-6 py-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-center">Booking Detail</h2>
            <Button
              variant="destructive"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(booking._id);
              }}
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Delete
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{booking.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-medium">{booking.phone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{booking.email}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">Message</p>
              <div className="p-3 bg-gray-100 rounded-md border border-gray-200">
                {booking.message}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
