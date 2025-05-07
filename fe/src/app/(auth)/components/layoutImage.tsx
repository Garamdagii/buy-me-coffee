import Image from "next/image";

export const LayoutImage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <Image width={240} height={240} src="/logo.png" alt="logo" />
      <div className="flex flex-col gap-3 items-center justify-center w-full">
        <h3 className="text-2xl font-bold text-[#09090B]">
          Fund your creative work
        </h3>
        <p className="text-base leading-[24px] text-[#09090B] w-[455px]">
          Accept support. Start a membership. Setup a shop. It’s easier than you
          think.
        </p>
      </div>
    </div>
  );
};
