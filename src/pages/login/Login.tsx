import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext ";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      if (email === "user" && password === "1234") {
        navigate("/admin/dashboard");
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        throw new Error("Email yoki parol noto'g'ri");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">Kirish</h2>
          {error && (
            <div className="text-red-500 bg-red-100 p-2 rounded">{error}</div>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email kiriting..."
            />
          </div>
          <div>
            <Label htmlFor="password">Parol</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parol kiriting..."
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <Button className="w-full" onClick={handleLogin} disabled={loading}>
            {loading ? "Kirilmoqda..." : "Kirish"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
