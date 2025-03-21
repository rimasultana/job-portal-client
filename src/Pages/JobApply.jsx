import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";
import { useNavigate, useParams } from "react-router"; // 
import axios from "axios";
import toast from "react-hot-toast";

const JobApply = () => {
  const { user } = useContext(AuthContext); 
  const { id } = useParams(); 
  console.log(user, id);
  const navigate = useNavigate()
 

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const applicationData = {
      job_id: id,
      applicant_email: user?.email, 
      linkedin: data.linkedin,
      github: data.github,
      resume: data.resume,
    };

    try {
      const res = await axios.post(`http://localhost:5000/application`, applicationData);
      if (res?.data?.insertedId) {
        toast.success("Application submitted successfully!");
        reset();
        navigate("/myapplication")
      }
    } catch (error) {
      toast.error("Failed to submit application!");
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0">
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Apply Now</h1>
                    <p className="text-muted-foreground">
                      Login to your Acme Inc account
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                      {...register("linkedin")}
                      type="url"
                      placeholder="Enter your LinkedIn URL"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="resume">Resume URL</Label>
                    <Input
                      {...register("resume")}
                      type="url"
                      placeholder="Enter your Resume URL"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="github">Github URL</Label>
                    <Input
                      {...register("github")}
                      type="url"
                      placeholder="Enter your Github URL"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cyan-400">
                    Apply
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
