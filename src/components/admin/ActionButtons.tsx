import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { InfoProps } from "@/types";
import { toast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const ActionButtons = ({
  item,
  refetch,
}: {
  item: InfoProps;
  refetch: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(item);

  const handleDelete = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/root/${item._id}`, {
      method: "DELETE",
    });
    refetch();
    toast({
      title: "Ma'lumot o'chirildi",
      description: "Ma'lumot o'chirildi",
    });
  };

  const handleUpdate = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/api/root/${item._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setOpen(false);
    refetch();
    toast({
      title: "Ma'lumot tahrirlandi",
      description: "Ma'lumot tahrirlandi",
    });
  };

  return (
    <div className="flex gap-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="icon">
            <Pencil size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Ma'lumotni tahrirlash</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 mt-2">
            <input
              type="number"
              value={formData.waterLevel}
              onChange={(e) =>
                setFormData({ ...formData, waterLevel: e.target.value })
              }
              placeholder="Suv sathi"
              className="w-full border rounded p-2"
            />
            <input
              type="number"
              value={formData.temperature}
              onChange={(e) =>
                setFormData({ ...formData, temperature: e.target.value })
              }
              placeholder="Temperatura"
              className="w-full border rounded p-2"
            />
            <input
              type="number"
              value={formData.tds}
              onChange={(e) =>
                setFormData({ ...formData, tds: e.target.value })
              }
              placeholder="Sho'rlanganligi"
              className="w-full border rounded p-2"
            />
            <Button onClick={handleUpdate} className="w-full">
              Saqlash
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" size="icon">
            <Trash2 size={16} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Siz haqiqatdan ushbu ma'lumotni o'chirmoqchimisiz?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Bekor qilish</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Ha, o‘chirish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
