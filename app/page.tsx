import { UserButton,SignedIn } from "@clerk/nextjs";

export default function Home(){
  return (
    <div>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  )
}