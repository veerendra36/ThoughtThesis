import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button2";
import { Plus } from "lucide-react";

const NavBar = () => {
  return (
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="flex items-center gap-1">
          <Image src={logo} alt="LOGO image" height={40} width={40} />
          <span className="font-bold">FlowBrain</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
            }}
          />
          <Button>
            <Plus size={20} className="mr-2" />
            Add Note
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
