
import React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ModernDatePickerProps {
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
}

const ModernDatePicker: React.FC<ModernDatePickerProps> = ({
  date,
  onDateSelect,
  placeholder = "Pick a date",
  disabled = false
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal h-12 px-4 border-2 transition-all duration-200",
            !date && "text-muted-foreground",
            "hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-3 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 shadow-xl border-2" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onDateSelect}
          disabled={(date) => date < new Date()}
          initialFocus
          className="p-3 pointer-events-auto"
        />
      </PopoverContent>
    </Popover>
  );
};

export default ModernDatePicker;
