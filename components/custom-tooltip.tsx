import { formatCurrency } from "@/lib/utils";
import { format } from "date-fns";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const CustomToolTip = ({ active, payload }: any) => {
  if (!active) return null;
  const date = payload[0].payload.date;
  const income = payload[0].payload.income;
  const expenses = payload[1].payload.expenses;

  return (
    <div className="bg-white p-4 rounded-sm shadow-md overflow-hidden">
      <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
        {format(date, "MMMM dd, yyyy")}
      </div>
      <Separator />
      <div className="p-2 px-3 spcace-y-1">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="sixe-1.5 bg-blue-500 rounded-full " />
            <p className="text-4 text-muted-foreground">Income</p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(income)}
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="sixe-1.5 bg-rose-500 rounded-full " />
            <p className="text-4 text-muted-foreground">Expenses</p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(expenses * -1)}
          </p>
        </div>
      </div>
    </div>
  );
};
