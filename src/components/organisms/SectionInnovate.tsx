"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "../atoms/Button";
import { useRef } from "react";
import { DICTIONARY_ES_EN } from "@/utils/constanst/dictionary";
import { useSwitchLanguage } from "@/app/core/application/global-state/switchLanguage";
import Link from "next/link";

export default function SectionInnovate(): React.ReactNode {
  const { openSwitchLanguage } = useSwitchLanguage((state) => state);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], ["0px", "-50px"]);
  const yTop = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);
  const yBottom = useTransform(scrollYProgress, [0, 1], ["0px", "-20px"]);
  return (
    <section className="p-4 pt-[var(--padding-big)] md:p-20 md:pl-[var(--padding-big)] md:pr-[var(--padding-big)] flex gap-[100px] flex-col md:flex-row pb-20">
      <div className="flex flex-col gap-4 md:w-[50%] md:pt-20">
        <h1 className="text-[3rem] md:text-[5.2rem] font-medium leading-[55px] md:leading-[80px] md:w-[90%]">
          {DICTIONARY_ES_EN[openSwitchLanguage].homeView.sectionInnovate.title}
        </h1>
        <p className="md:w-[90%]">
          {
            DICTIONARY_ES_EN[openSwitchLanguage].homeView.sectionInnovate
              .description
          }
        </p>
        <div className="flex items-center gap-4">
          <Button variant="default">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=573004001077&text=Hola+BlueByte%21&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              {
                DICTIONARY_ES_EN[openSwitchLanguage].homeView.sectionInnovate
                  .buttonExplore
              }
            </Link>
          </Button>
          <Button variant="gray">
            {
              DICTIONARY_ES_EN[openSwitchLanguage].homeView.sectionInnovate
                .buttonContact
            }
          </Button>
        </div>
      </div>
      <div className="md:w-[40%]">
        <div
          className="h-full w-full flex justify-center items-center relative"
          ref={ref}
        >
          <motion.img
            src="/images/image01.avif"
            className="rounded-[var(--border-radius-medium)]"
            style={{ y: yMain }}
          />
          <motion.div
            className="w-[150px] md:w-[250px] z-10 absolute top-[-20px] md:top-[60px] right-[-10px] md:right-[-60px]"
            style={{ y: yTop }}
          >
            <img
              src="/images/image03.avif"
              className="rounded-[var(--border-radius-medium)] w-full"
            />
          </motion.div>
          <motion.div
            className="w-[150px] md:w-[250px] z-10 absolute bottom-[-60px] md:bottom-2 left-[-10px  ] md:left-[-60px]"
            style={{ y: yBottom }}
          >
            <img
              src="/images/image02.avif"
              className="rounded-[var(--border-radius-medium)] w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
