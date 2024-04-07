import { LoginButton } from "@/components/auth/login-button";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center justify-center p-6">
        <div className="flex flex-col items-center justify-center text-center gap-y-6">
          <h1 className="text-3xl">Next Auth</h1>
          <p>Authentication Masterclass</p>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
          <ModeToggle />
        </div>
      </main>
    </>
  );
}
