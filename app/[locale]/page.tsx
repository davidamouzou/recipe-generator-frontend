import Header from "@/components/widgets/header";
import { SliderCard } from "@/components/widgets/slider_card";
import { RecipeProvider } from "@/app/context/RecipeContext";
import { Hero } from "@/components/widgets/hero";
import { RecipeList } from "@/components/widgets/recipe-list";

export default function Home() {
  return (
    <RecipeProvider>
      <main className="overflow-x-hidden w-screen">
        <div className="lg:mx-16 m-4 md:m-8">
          <Header />
          <section className="flex flex-col md:flex-row mt-12 md:space-x-8 space-y-6 lg:space-y-0">
            <Hero />
            <div className="lg:w-1/2 w-full">
              <SliderCard />
            </div>
          </section>

          <hr className="my-8" />

          <RecipeList />
          <div className="h-36" />
        </div>
      </main>
    </RecipeProvider>
  );
}