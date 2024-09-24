"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";
const LeafletMap = dynamic(() => import("../../components/LeafletMap"), {
  ssr: false,
});

export default function ContactUsPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/assets/contactTopBg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30rem",
          width: "100%",
          filter: "#912828",
          color: "white",
        }}
      >
        <div className="mx-16 pt-[10%] tracking-[0.3rem] text-center">
          <h1 className="text-[4rem] font-extrabold text-center">
            HOW CAN WE HELP YOU?
          </h1>
          <h2 className="ml-[3rem] tracking-wider text-[24px]">
            send us a message.
          </h2>
        </div>
      </div>

      <div className="text-center my-12">
        <h1 className="text-6xl font-extrabold tracking-[0.5rem]">
          LET&apos;S HAVE A TALK
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-20 h-auto relative my-28 ">
        {/* First Grid Item (60% width) */}
        <div className="flex flex-col w-full md:w-[60%] px-20">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="w-full max-w-sm">
              <Label htmlFor="fName" className="font-bold">
                FIRST NAME
              </Label>
              <Input
                type="text"
                id="fName"
                placeholder="First Name"
                style={{ boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
            <div className="w-full max-w-sm">
              <Label htmlFor="lName" className="font-bold">
                LAST NAME
              </Label>
              <Input
                type="text"
                id="lName"
                placeholder="Last Name"
                style={{ boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
          </div>
          <div className="w-full max-w-sm mb-8">
            <Label htmlFor="email" className="font-bold">
              EMAIL ADDRESS
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              style={{ boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div className="w-full mb-4">
            <Label htmlFor="message" className="font-bold">
              YOUR MESSAGE
            </Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              style={{ boxShadow: "inset 0 4px 6px rgba(0, 0, 0, 0.1)" }}
            />
          </div>
          <div>
            <Button className="w-full mb-4 font-bold tracking-widest bg-[#912828] border-black">
              SEND MESSAGE
            </Button>
          </div>
        </div>

        {/* Second Grid Item (40% width) */}
        <div className="flex flex-col relative w-full md:w-[40%] pr-20">
          <LeafletMap />
          <div className="py-2">
            <p className="text-[18px] font-semibold">Luna St, La Paz</p>
            <p>Iloilo City, Philippines</p>
            <p>5000</p>
            <p>+63 123 456 7890</p>
            <p>kantonize@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
