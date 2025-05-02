import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CityDataProps } from "@/types";

export default function CityList() {
  const navigate = useNavigate();
  const [cities, setCities] = useState<CityDataProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/cities`
      );
      const data = await response.json();
      setCities(data);
    };

    fetchData();
  }, []);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">City List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <Card onClick={() => navigate(`/admin/city-list/${city._id}`)} key={city._id} className="overflow-hidden shadow-md cursor-pointer">
            <img
              src={`${import.meta.env.VITE_API_URL}/${city.heroImg}`}
              alt={city.cityName}
              className="w-full h-40 object-cover"
            />
            <CardContent className="space-y-2 py-4">
              <h3 className="text-lg font-semibold">{city.cityName}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{city.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <Badge variant="outline">ID: {city._id}</Badge>
                <Badge variant="outline">Lat: {city.coordinates.latitude}</Badge>
                <Badge variant="outline">Lng: {city.coordinates.longitude}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
