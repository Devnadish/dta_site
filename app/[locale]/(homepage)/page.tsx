import Image from "next/image";
import CromboDetail from "@/components/plugin/CromboDetail";
import CanonDetail from "../../../components/plugin/CanonDetail";
import HomePageBody from "./component/HomePageBody";

export default function Page() {
  return (
    <div className="flex  flex-col gap-4 p-4 pt-0 mt-4 border " id="mainpage">
      <div className="grid  gap-4 grid-cols-1 md:grid-cols-2">
        <CromboDetail />
        <CanonDetail />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        <HomePageBody />
      </div>
    </div>
  );
}
