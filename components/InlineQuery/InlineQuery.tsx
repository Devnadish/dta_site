import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocale } from "next-intl";
import FormData from "./FormQuery";

export function InlineQuery({
  btnTitle,
  title = "DreamToApp",
  description = "DreamToApp",
  subtitle,
}: {
  btnTitle: string;
  subtitle?: string;
  title: string;
  description?: string;
}) {
  const locale = useLocale();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="font-cairo w-1/2 bg-blue-600 hover:bg-blue-700 text-white"
        >
          {btnTitle}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gray-50 border border-gray-200 shadow-lg rounded-lg">
        <DialogHeader className="flex flex-col items-center justify-center space-y-2">
          <DialogTitle className="bg-gradient-to-r from-blue-500 to-green-500 py-3 px-6 rounded-lg text-white font-bold shadow-md">
            {title}
          </DialogTitle>
          {subtitle && (
            <DialogTitle className="text-gray-800 font-semibold text-balance text-center">
              {subtitle}
            </DialogTitle>
          )}
          <DialogDescription className="text-gray-600 text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <FormData locale={locale} type={title} />
      </DialogContent>
    </Dialog>
  );
}
