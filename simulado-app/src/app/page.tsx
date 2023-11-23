"use client"

import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  const goToRegister = () => {
    router.push("/registro");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl items-center flex justify-center">Bem-vindo ao Projeto do Simulado 2º Bimestre</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-black text-lg">Explore as funcionalidades do projeto</p>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button className="w-40" variant="secondary" onClick={goToLogin}>
            Login
          </Button>
          <Button className="w-40" onClick={goToRegister}>
            Registro
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}