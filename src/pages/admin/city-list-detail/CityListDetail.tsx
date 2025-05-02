import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { CityDataProps } from "@/types";

export default function CityListDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState<CityDataProps | null>(null);
  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities/${id}`
      );
      const data = await response.json();
      setCity(data);
    };
    fetchCity();
  }, [id]);
  
  console.log(city);
  

  if (!city) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        City not found
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cities
      </Button>
      <Card className="shadow-xl">
        <img
          src={`${import.meta.env.VITE_API_URL}/${city.heroImg}`}
          alt={city.cityName}
          className="w-full h-60 object-cover rounded-t-md"
        />
        <CardContent className="p-6 space-y-4">
          <h2 className="text-3xl font-bold">{city.cityName}</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            {city.desc}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <span className="font-medium">City ID:</span> {city._id}
            <span className="font-medium">Latitude:</span> {city.coordinates.latitude}
            <span className="font-medium">Longitude:</span> {city.coordinates.longitude}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
