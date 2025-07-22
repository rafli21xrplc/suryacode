"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-2xl mb-4">SC</h1>
          </div>

          <div className="text-center">
            <div className="flex flex-col gap-2 justify-center">
              <p>Malang, Indonesia</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h2 className="font-bold text-xl mb-4">Why should you hire me?</h2>
          </div>
        </div>

        <div className="my-8">
          <MaskContainer
            revealText={
              <p className="mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl">
                My track record in process optimization has proven successful in
                increasing team efficiency by 20%. I'm confident I can apply
                this strategic expertise to boost productivity and support your
                growth goals.
              </p>
            }
            className="rounded-md"
          >
            My expertise extends beyond{" "}
            <span className="text-blue-500">
              technical expertise to a collaborative
            </span>{" "}
            spirit that fosters innovative solutions.
          </MaskContainer>
        </div>

        <div className="mt-8 pt-6 text-center text-sm">
          <p>© 2025 SC.ID. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
