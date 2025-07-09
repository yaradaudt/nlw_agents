// import { Wand } from "lucide-react";
// import { Button } from "./components/ui/button";
import { Room } from "./pages/room";
import { CreateRoom } from "./pages/create-room";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<CreateRoom />} index />
          <Route element={<Room />} path="/room/:id" />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
