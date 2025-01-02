import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

const RegistrationForm = () => {
  const track = [
    "Robotics",
    "Marine Robotics",
    "Python for Engineers and Scientists",
    "C++ for Engineers and Scientists",
    "Matlab for Engineers and Scientists",
    "Computer Aided Designs",
    "Data Analysis",
    "Computational Fluid Dynamics",
    "Sustainable Ship Design",
  ];
  return (
    <>
      <form className="py-36 lg:w-1/3 max-md:px-5 space-y-4 mx-auto">
        <div className="space-y-2 ">
          <Label>Full Name</Label>
          <Input placeholder="enter your full name" />
        </div>
        <div className="space-y-2 m-0">
          <Label>Date of birth</Label>
          <Input type="date" />
        
        </div>
        <div className="space-y-2 ">
          <Label>Level of study</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue
                placeholder="Select your level"
                className="font-normal"
              />
              <SelectContent>
                <SelectItem value="high-school">High School</SelectItem>
                <SelectGroup>
                  <SelectLabel>Bachelors</SelectLabel>
                  <SelectItem value="UG100" className="pl-3 text-xs">
                    100 Level
                  </SelectItem>
                  <SelectItem value="UG200" className="pl-3 text-xs">
                    200 Level
                  </SelectItem>
                  <SelectItem value="UG300" className="pl-3 text-xs">
                    300 Level
                  </SelectItem>
                  <SelectItem value="UG400" className="pl-3 text-xs">
                    400 Level
                  </SelectItem>
                  <SelectItem value="UG500" className="pl-3 text-xs">
                    500 Level
                  </SelectItem>
                  <SelectItem value="UG600" className="pl-3 text-xs">
                    600 Level
                  </SelectItem>
                </SelectGroup>
                <SelectItem value="pgd">Post Graduate Degree</SelectItem>
                <SelectItem value="masters">Masters</SelectItem>
                <SelectItem value="phd">PHD</SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Most Recent Institution</Label>
          <Input placeholder="recent institution" />
        </div>
        <div className="space-y-2">
          <Label>Department</Label>
          <Input placeholder="department" />
        </div>
        <div className="space-y-2">
          <Label>Desired Track</Label>
          <Select>
            <SelectTrigger>
              <SelectValue
                placeholder="Select your track"
                className="font-normal"
              />
            </SelectTrigger>
            <SelectContent>
              {track.map((item) => (
                <SelectItem value={item.toLowerCase()}>{item}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Relevant Experience</Label>
          <Textarea />
        </div>
        <div className="space-y-2">
          <Label className="capitalize">
            Motivation to Apply (Why Did You Choose your track)
          </Label>
          <Textarea />
        </div>
        <div className="space-y-2">
          <Label>Links to your social media (linkedIn preferably)</Label>
          <Input placeholder="social media links" />
        </div>
        <div className="space-y-2">
          <Label>Upload relevant means of identification</Label>
          <Input placeholder="Upload Identification" type="file" />
        </div>
        <div className="space-y-5 pt-4">
          <div className="flex gap-2">
            <Checkbox id="laptop" />
            <Label htmlFor="laptop" className="font-normal text-gray-700">
              I have a good laptop with necessary capabilities for technical
              tasks (at least 4gb ram)
            </Label>
          </div>
          <div className="flex gap-2 ">
            <Checkbox id="internet" />
            <Label htmlFor="internet" className="font-normal text-gray-700">
              I have a stable internet connection for live and recorded
              sessions.
            </Label>
          </div>
          <div className="flex gap-2">
            <Checkbox id="time" />
            <Label htmlFor="time" className="font-normal text-gray-700">
              I have sufficient time and commitment to complete tasks and
              actively participate in the program
            </Label>
          </div>
        </div>
        <Button className="">Register</Button>
      </form>
    </>
  );
};

export default RegistrationForm;
