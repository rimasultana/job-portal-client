import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router";
import google from "../assets/Google.webp";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";
import toast from "react-hot-toast";
export function Register() {
  const { register, handleSubmit, reset } = useForm();
  const { googleUser, createLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createLogin(data.email, data.password)
      .then((result) => {
        toast.success("Register Successfully!", result);
        reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Falied Register! Pleaase try again!, ${error.messege}`);
      });
  };
  const handleGoogleUser = () => {
    googleUser()
      .then(() => {
        toast.success("Successfully Login!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Falied Register! Pleaase try again!, ${error.messege}`);
      });
  };
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-lg">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Register</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Name</Label>
                    <Input
                      {...register("name")}
                      type="text"
                      placeholder="rima@example.com"
                      required
                    />
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
                    <Label htmlFor="email">Photo URL</Label>
                    <Input
                      {...register("photo")}
                      type="text"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                    </div>
                    <Input
                      {...register("password", {
                        pattern: /^[A-Za-z0-9!@#$%^&*()_+=-]+$/,
                      })}
                      type="password"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-500">
                    Login
                  </Button>
                  <Button
                    onClick={handleGoogleUser}
                    variant="outline"
                    className="w-full bg-cyan-100"
                  >
                    <img src={google} alt="google" className="w-6" />
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    to={"/login"}
                    className="underline underline-offset-4 text-red-400"
                  >
                    Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Register;
