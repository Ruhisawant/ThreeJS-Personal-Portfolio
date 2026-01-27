import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => { {/* combine with page.js */}
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">Storyteller of Dreams</h2>
          
          <p className="font-light text-xs sm:text-sm md:text-base"> {/* increase font size */}
            My web development journey is a story woven with wonder, imagination, and creativity. This site is 
            crafted using JavaScript, Next.js, and Tailwind, forming the magical foundation of every design and 
            interaction.With enchanted techniques, I build lively creations, while thoughtful design adds sparkle 
            to every detail. Every interface is shaped with precision and elegance, ensuring both beauty and 
            function reign supreme. Come wander through my fairytale world, where every project tells a story.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"} >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">projects</sub> {/* increase font size */}
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+ <sub className="font-semibold text-base">years of experience</sub> {/* increase font size */}
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto" alt="Ruhi GitHub Top Languages" loading="lazy"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=ruhisawant&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto" alt="Ruhi GitHub Stats" loading="lazy"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=ruhisawant&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
          />
        </ItemLayout>

        {/* fix the issues here */}
        {/* <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto" alt="Ruhi Skills Icons" loading="lazy"
            src={`https://skillicons.dev/icons?i=bootstrap,css,figma,firebase,git,github,html,js,linux,apple,windows,bash,mysql,sqlite,nextjs,nodejs,npm,postgres,react,supabase,tailwind,threejs,vite,vscode,python,java,c,cpp,r,dart,flutter,vue,typescript,eclipse,androidstudio`}
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto" alt="Ruhi GitHub Streak Stats" loading="lazy"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=ruhisawant&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
          />
          src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Ruhi%20Sawant&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`} 

        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/ruhisawant/Nextjs-contentlayer-blog"
            target="_blank" className="w-full"
          >
            <img
              className="w-full h-auto" alt="Ruhi GitHub Pinned Repo" loading="lazy"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=ruhisawant&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            />
          </Link>
        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;