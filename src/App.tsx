import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NutritionInfo from "./pages/NutritionInfo";
import FoodData from "./pages/FoodData";
import Tools from "./pages/Tools";
import HealthyRecipes from "./pages/HealthyRecipes";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import BmiBmr from "./pages/BmiBmr";
import HealthyFoods from "./pages/HealthyFoods";
import NutritionGuide from "./pages/NutritionGuide";
import ActivityCalories from "./pages/ActivityCalories";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nutrition-info" element={<NutritionInfo />} />
            <Route path="/food-data" element={<FoodData />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/healthy-recipes" element={<HealthyRecipes />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bmi-bmr" element={<BmiBmr />} />
            <Route path="/healthy-foods" element={<HealthyFoods />} />
            <Route path="/nutrition-guide" element={<NutritionGuide />} />
            <Route path="/activity-calories" element={<ActivityCalories />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
