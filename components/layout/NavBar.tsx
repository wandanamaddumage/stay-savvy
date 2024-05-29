"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Container from "../Container";

const NavBar = () => {
  return (
    <div className="Sticky top-0 border border-b-primary/10 bg-secondary">
      <Container>
        <UserButton afterSignOutUrl="/" />
      </Container>
    </div>
  );
};

export default NavBar;
