"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TOOLS, type ToolAccent } from "@/data/tools";
import { cn } from "cn";

type FloatingToolsProps = {
  tools: ToolAccent[];
  className?: string;
};

export function FloatingTools({ tools, className }: FloatingToolsProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block",
        className,
      )}
    >
      {tools.map((tool, index) => {
        const duration = tool.duration ?? 8;
        const delay = tool.delay ?? 0;
        const y = tool.y ?? 14;
        const x = tool.x ?? 6;
        const rotate = tool.rotate ?? 0;

        return (
          <motion.div
            key={`${tool.id}-${index}`}
            className={cn("absolute opacity-[0.18]", tool.className)}
            animate={{
              y: [0, -y, 0],
              x: [0, x, 0],
              rotate: [rotate - 2, rotate + 2.5, rotate - 2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={TOOLS[tool.id]}
              alt=""
              width={180}
              height={220}
              className="h-auto w-full select-none object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
