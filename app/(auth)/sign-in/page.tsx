import { SignIn } from "@clerk/nextjs";

export default function Page({
  searchParams,
}: {
  searchParams: { redirectUrl: string };
}) {
  const { redirectUrl } = searchParams;

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <SignIn redirectUrl={redirectUrl || "/"} />
    </div>
  );
}
