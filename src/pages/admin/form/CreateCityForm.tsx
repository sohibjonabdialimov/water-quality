import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import axios from "axios";
import PopularArrInput from "@/components/PopularArrInput";

export default function CreateCityForm() {
  const [formData, setFormData] = useState({
    cityName: "",
    desc: "",
    bg: "",
    heroTitle: "",
    heroDesc: "",
    popularDesc: "",
    videoUrl: "",
    tempDesc: "",
    giftDesc: "",
    kitchenDesc: "",
    popularArr: [] as string[],
    historyDesc: "",
    latitude: "",
    longitude: "",
    infoList: "",
  });

  const [files, setFiles] = useState({
    heroImg: null as File | null,
    images: [] as File[],
    giftImages: [] as File[],
    kitchenImages: [] as File[],
  });

  const handlePopularArrChange = (arr: string[]) => {
    setFormData(prev => ({ ...prev, arr }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof typeof files
  ) => {
    const inputFiles = e.target.files;
    if (!inputFiles) return;

    if (field === "heroImg") {
      setFiles(prev => ({ ...prev, heroImg: inputFiles[0] }));
    } else {
      setFiles(prev => ({ ...prev, [field]: Array.from(inputFiles) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(item => data.append(key, item));
      } else {
        data.append(key, value);
      }
    });

    data.append("popularArr", JSON.stringify(formData.popularArr));


    if (files.heroImg) data.append("heroImg", files.heroImg);
    files.images.forEach(file => data.append("images", file));
    files.giftImages.forEach(file => data.append("giftImages", file));
    files.kitchenImages.forEach(file => data.append("kitchenImages", file));

    try {
      const res = await axios.post("http://localhost:4000/api/cities", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("City created successfully!");
      console.log(res.data);
    } catch (error: unknown) {
      console.error(error);
      alert("Error creating city: " + (error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Create City</h2>

      {[
        { label: "Place Name", name: "cityName" },
        { label: "Description", name: "desc" },
        { label: "Background Image Url", name: "bg" },
        { label: "Hero Title", name: "heroTitle" },
        { label: "Hero Description", name: "heroDesc" },
        { label: "Popular Description", name: "popularDesc" },
        { label: "Video URL", name: "videoUrl" },
        { label: "Temperature Description", name: "tempDesc" },
        { label: "Gift Description", name: "giftDesc" },
        { label: "Kitchen Description", name: "kitchenDesc" },
        { label: "History Description", name: "historyDesc" },
        { label: "Latitude", name: "latitude" },
        { label: "Longitude", name: "longitude" },
        { label: "Info List (JSON array)", name: "infoList" },
      ].map((field, idx) => (
        <div key={idx}>
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.name.includes("Desc") || field.name === "infoList" ? (
            <Textarea
              name={field.name}
              value={(formData as unknown as Record<string, string>)[field.name]}
              onChange={handleChange}
              className="mt-1"
            />
          ) : (
            <Input
              type="text"
              name={field.name}
              value={(formData as unknown as Record<string, string>)[field.name]}
              onChange={handleChange}
              className="mt-1"
            />
          )}
        </div>
      ))}
    <PopularArrInput values={formData.popularArr} onChange={handlePopularArrChange} />
      {/* File inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label>Hero Image (1 ta rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "heroImg")}
          />
        </div>
        <div>
          <Label>Images (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "images")}
          />
        </div>
        <div>
          <Label>Gift Images (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "giftImages")}
          />
        </div>
        <div>
          <Label>Kitchen Images (ko‘p rasm)</Label>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleFileChange(e, "kitchenImages")}
          />
        </div>
      </div>

      <Button type="submit" className="w-full mt-6">Create City</Button>
    </form>
  );
}
