import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PopularArrInputProps {
  values: string[];
  onChange: (values: string[]) => void;
}

export default function PopularArrInput({ values, onChange }: PopularArrInputProps) {
  const handleItemChange = (index: number, newValue: string) => {
    const updated = [...values];
    updated[index] = newValue;
    onChange(updated);
  };

  const handleAdd = () => {
    onChange([...values, ""]);
  };

  const handleRemove = (index: number) => {
    const updated = values.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-2">
      <Label>Popular Array</Label>
      {values.map((item, index) => (
        <div key={index} className="flex gap-2 items-center">
          <Input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
          />
          <Button type="button" onClick={() => handleRemove(index)} variant="destructive">
            Remove
          </Button>
        </div>
      ))}
      <Button type="button" onClick={handleAdd}>
        + Add Popular Item
      </Button>
    </div>
  );
}
