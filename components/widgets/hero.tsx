"use client";

import Image from "next/image";
import arrow from "@/app/assets/icons/arrow.png";
import RecipeCreator from "@/components/widgets/recipe-composer";
import { SearchBar } from "./search-bar";
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations('Hero');

    return (
        <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl lg:text-6xl font-bold">
                <div>
                    <div className={`ml-12 bg-[url('../assets/images/text_bg.jpg')] bg-clip-text bg-cover bg-center text-transparent`}>
                        <span
                            className="text-transparent bg-clip-text bg-cover bg-gradient-to-r from-85% 
              from-slate-800 to-transparent
              dark:from-white
              light:from-slate-800 light:to-transparent"
                        >
                            {t('fresh')}
                        </span>{" "}
                        {t('food')}
                    </div>
                    <div className="flex">
                        <div className="italic font-medium pb-2 pr-2 text-green-800 dark:text-green-600 text-3xl lg:text-4xl">
                            {t('with')}{" "}
                        </div>
                        {t('great')}
                        <span className="relative ml-4">
                            {t('taste')}
                            <Image className="absolute w-40 top-0 left-4" src={arrow} alt="fleche" />
                        </span>
                    </div>
                </div>
            </h2>
            <p className="mt-12">
                {t('description')}
            </p>
            <SearchBar />
            <RecipeCreator />
        </div>
    );
}
