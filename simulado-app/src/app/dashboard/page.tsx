import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-500 to-blue-500">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl items-center flex justify-center">Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg text-black">Bem-vindo ao Dashboard</p>
        </CardContent>
      </Card>
    </div>
  );
}
