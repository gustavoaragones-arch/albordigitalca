import { SquareDots } from "@/components/square-dots";
import { SkeletonTwo } from "@/components/bento-one/skeletons/second";

export const RegularUpdates = () => {
  return (
    <div className="h-full">
      <div className="absolute top-0 -right-20 size-40 w-full mask-b-from-10% mask-radial-[100%_100%] mask-radial-from-25% mask-radial-at-right opacity-10">
        <SquareDots color="#000000" className="absolute" />
      </div>
      <h2 className="text-base font-medium text-black">
        Brand Identity
      </h2>
      <p className="mt-4 text-base text-neutral-600">
        Logo, colours, typography, and the visual foundation your business
        needs to look consistent everywhere. For businesses starting fresh or
        refreshing an existing look.
      </p>
      <SkeletonTwo />
    </div>
  );
};

