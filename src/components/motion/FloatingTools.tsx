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
        const duration = tool.duration ?? 6;
        const delay = tool.delay ?? 0;
        const y = tool.y ?? 28;
        const x = tool.x ?? 12;
        const rotate = tool.rotate ?? 0;

        return (
          <motion.div
            key={`${tool.id}-${index}`}
            className={cn("absolute opacity-[0.22]", tool.className)}
            animate={{
              y: [0, -y, y * 0.35, 0],
              x: [0, x, -x * 0.5, 0],
              rotate: [rotate - 5, rotate + 6, rotate - 3, rotate - 5],
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
              width={220}
              height={280}
              className="h-auto w-full select-none object-contain drop-shadow-sm"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
