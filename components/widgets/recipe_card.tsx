import { Recipe } from "@/api/entities/recipe";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Earth, Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push(`/recipes/${recipe.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full bg-background rounded-2xl overflow-hidden relative cursor-pointer transition-transform hover:scale-[1.02] active:scale-100 animate-in fade-in"
      tabIndex={0}
      role="button"
      aria-label={`Voir la recette ${recipe.recipe_name}`}
    >
      <div className="w-full overflow-hidden z-0 relative h-48">
        <div className="flex items-center space-x-1 justify-between w-full absolute p-2 z-20">
          <div className="flex items-center space-x-1 bg-background/70 backdrop-blur-xl p-1 rounded-full w-fit text-xs">
            <Earth className="h-3 w-3" />
            <span className="line-clamp-1">{recipe.cuisine || "Cuisine"}</span>
          </div>
        </div>
        <Image
          className="rounded-2xl object-cover w-full h-full transition-transform duration-300"
          src={recipe.image}
          alt={recipe.recipe_name}
          width={500}
          height={500}
          draggable={false}
        />
      </div>
      <div className="font-semibold text-sm px-2 mt-2 drop-shadow">
        {recipe.recipe_name}
      </div>
    </div>
  );
};

export default RecipeCard;
