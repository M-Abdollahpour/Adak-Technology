import Main from "~/components/main";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "آداک فناوری داده‌پردازان|زیرساخت، امنیت، نرم‌افزار" }];
}

export default function Home() {
  return <Main />;
}
