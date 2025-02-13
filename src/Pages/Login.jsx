import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import animation from "../assets/animation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router";
import google from "../assets/Google.webp";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";

export function Login() {
  const { register, handleSubmit } = useForm();
    const { googleUser } = useContext(AuthContext);


  const onSubmit = (data) => console.log(data);
  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        toast.success("Successfully Login!");
      })
      .catch((error) => {
        toast.error("Failed Login", error);
      });
  };
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-balance text-muted-foreground">
                      Login to your Acme Inc account
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-2 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      {...register("password")}
                      id="password"
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-400">
                    Login
                  </Button>
                  <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                  <div className="flex">
                    <Button onClick={handleGoogleUser} variant="outline" className="w-full">
                      <img src={google} alt="google" className="w-6" />

                      <span className="sr-only">Login with Google</span>
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link
                      to={"/register"}
                      className="underline underline-offset-4 text-red-500"
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
              <div className="relative hidden bg-muted md:block">
                <Player
                  autoplay
                  loop
                  src={animation}
                  style={{ height: "500px", width: "300px" }}
                ></Player>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Login;
