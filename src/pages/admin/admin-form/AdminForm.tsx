import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export default function AdminForm() {
  const [formData, setFormData] = useState({
    chuqurlik: "",
    pH: "",
    tC: "",
    eh: "",
    tds: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/root", {
        ...formData,
        chuqurlik: parseFloat(formData.chuqurlik),
        pH: parseFloat(formData.pH),
        tC: parseFloat(formData.tC),
        eh: parseFloat(formData.eh),
        tds: parseFloat(formData.tds),
        time: formData.time,
      });
      toast({
        title: "Ma'lumot saqlandi!",
        description: "Ma'lumot saqlandi!",
      });
    } catch (error: unknown) {
      console.error(error);
      toast({
        title: "Xatolik yuz berdi",
        description: "Xatolik yuz berdi",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow"
    >
      <h2 className="text-2xl font-bold text-center mb-6">Ma'lumot qo'shish</h2>

      {[
        { label: "Chuqurlik", name: "chuqurlik" },
        { label: "pH", name: "pH" },
        { label: "Temperatura", name: "tC" },
        { label: "Eh", name: "eh" },
        { label: "TDS", name: "tds" },
        { label: "Vaqt", name: "time" },
      ].map((field, idx) => (
        <div key={idx}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            type="text"
            name={field.name}
            value={(formData as unknown as Record<string, string>)[field.name]}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      ))}

      <Button type="submit" className="w-full mt-6">
        Ma'lumot qo'shish
      </Button>
    </form>
  );
}
