"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
      {/* Botão Voltar para a Home */}
      <Button
        className="absolute top-2 left-2 text-white"
        variant="link"
        onClick={goToHome}
      >
        Voltar para a Home
      </Button>

      {/* Card Principal */}
      <Card className="mt-8">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl items-center flex justify-center">
            Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-black">
            Bem-vindo ao Dashboard
          </p>
        </CardContent>
      </Card>

      {/* Cards adicionais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Card 1 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Curiosidade #1</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Curiosidade #2</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Curiosidade #3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
