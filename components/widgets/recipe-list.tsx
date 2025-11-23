"use client";

import RecipeCard from "@/components/widgets/recipe_card";
import { SkeletonCard } from "@/components/widgets/skeleton-card";
import { Button } from "@/components/ui/button";
import { useRecipes } from "@/app/context/RecipeContext";
import { useTranslations } from "next-intl";

export function RecipeList() {
    const { filteredRecipes, loading, loadMore } = useRecipes();
    const t = useTranslations('RecipeList');

    return (
        <>
            <h2 className="mt-12 font-bold text-2xl mb-4">{t('popularRecipes')}</h2>

            <div className="my-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 py-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}

                    {loading &&
                        Array(20)
                            .fill(0)
                            .map((_, index) => <SkeletonCard key={index} />)}
                </div>
            </div>
            <div className="flex justify-center mt-4 mb-8">
                <Button onClick={loadMore} variant="secondary" disabled={loading}>
                    {loading ? t('loading') : t('loadMore')}
                </Button>
            </div>
        </>
    );
}
