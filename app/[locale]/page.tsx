import { SliderCard } from "@/app/components/widgets/slider_card";
import { RecipeProvider } from "@/app/context/RecipeContext";
import { Hero } from "@/app/components/widgets/hero";
import { RecipeList } from "@/app/components/widgets/recipe-list";
import RecipeIAChat from "@/app/components/widgets/recipe-ia-chat";
import Header from "@/app/components/widgets/header";

export default function Home() {
  return (
    <RecipeProvider>
      <main className="overflow-x-hidden w-screen bg-background min-h-screen">
        <div className="lg:mx-16 m-4 md:m-8 relative">
          <Header />
          <section className="flex flex-col md:flex-row mt-8 md:mt-12 md:space-x-8 space-y-8 lg:space-y-0 min-h-auto md:min-h-[600px]">
            <Hero />
            <div className="lg:w-1/2 w-full h-full">
              <SliderCard />
            </div>
          </section>

          <hr className="my-12 border-border/40" />

          <RecipeList />
          <div className="h-36" />

          <RecipeIAChat />
        </div>
      </main>
    </RecipeProvider>
  );
}