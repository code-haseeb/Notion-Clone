"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <div className="text-w-3xl space-y-4 ">
      {/* Heading  */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas Plans and everything you can Learn is Here,Welcome to{" "}
        <span>Jotion</span>
      </h1>
      {/* Description */}
      <h3 className="text-base sm:text-xl md:2xl font-medium ">
        Jotion is the connected workspace where
        <br /> Excillent ,Productive and Useful Work happens
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Jotion
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            Get Zotion for free
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};
