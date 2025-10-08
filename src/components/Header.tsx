import React from "react";
import { ChefHat } from "lucide-react";
const Header = () => {
  return (
    <header>
      <div className="bg-white shadow-lg top-0 z-10 sticky px-40 p-10 flex flex-row gap-4">
        <div className="flex items-center justify-center w-15 h-15 rounded-lg bg-gradient-to-br from-orange-300 to-orange-600">
          <ChefHat className="text-white w-10 h-10" />
        </div>
        <div>
          <span className="flex text-3xl font-bold font-[AthemiFont]">RecipeHub</span>
          <span className="font-light">Discover delicious recipes from around the world</span>
        </div>
      </div>
    </header>
  );
};

export default Header;