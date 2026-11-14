import Main from "~/components/main";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "آداک فناوری داده‌پردازان|زیرساخت، امنیت، نرم‌افزار" },
    {
      name: "description",
      content:
        "شرکت آداک فناوری داده پردازان درخصوص پروژه‌های حوزه برنامه نویسی فعالیت می‌کند",
    },
  ];
}

export default function Home() {
  return <Main />;
}
