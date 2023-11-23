"use client"

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = () => {
    router.push("/login");
  };

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-pink-500">
      <Card>
        <Button
          className="absolute top-2 left-2 text-white"
          variant="link"
          onClick={goToHome}
        >
          Voltar para a Home
        </Button>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl items-center flex justify-center">Registro</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="Seu Nome" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between space-x-4">
          <Button className="flex-1" variant="secondary" onClick={() => router.push("/login")}>
            Já tem uma conta? Login
          </Button>
          <Button className="flex-1" onClick={handleRegister}>
            Registrar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}