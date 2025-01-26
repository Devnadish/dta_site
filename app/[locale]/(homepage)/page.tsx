import HomePageBody from "./component/HomePageBody";
import CromboDetail from "./component/CromboDetail";
import CanonDetail from "./component/CanonDetail";

export default function Page() {
  return (
    <div className="flex  flex-col gap-4    " id="mainpage">
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
