import Button from "components/Button";
import { signIn } from "next-auth/client";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export default function SignIn() {
  return (
    <div className="h-screen text-white flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Sign in with Spotify</h2>
      <Button icon={faSpotify} onClick={() => signIn("spotify")}>
        Sign in
      </Button>
    </div>
  );
}
