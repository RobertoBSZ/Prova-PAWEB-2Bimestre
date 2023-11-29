"use client"

import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push('/registro');
  };
  const handleLogin = () => {
    router.push('/dashboard');
  };
  const handleRecoverAccount = () => {
    router.push('/recover');
  };
  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <h1 className="text-3xl text-white mb-4">Bem-vindo ao Sistema</h1>
      <Button
          className="absolute top-2 left-2 text-white"
          variant="link"
          onClick={goToHome}
        >
          Voltar para a Home
        </Button>
      <div className="flex flex-col items-center">

        <Card>
          <CardHeader className="space-y-1">
            {/* Título dentro do Card */}
            <CardTitle className="text-2xl items-center flex justify-center">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
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
            <Button className="w-50" variant="secondary" onClick={handleCreateAccount}>
              Criar conta
            </Button>
            <Button className="flex-1" onClick={handleLogin}>
              Entrar
            </Button>
          </CardFooter>
          <div className="items-center flex justify-center">
            <Button variant="link" onClick={handleRecoverAccount}>Esqueci minha senha</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
