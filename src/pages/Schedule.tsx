
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Clock, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const navigate = useNavigate();

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      // Here you would typically integrate with a backend service
      console.log("Scheduled for:", selectedDate, selectedTime);
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-neutral-dark">
            Schedule a Free Consultation
          </h1>
          <p className="mt-2 text-neutral-light">
            Select a date and time that works best for you
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Select Date</h2>
              </div>
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={{ before: new Date() }}
                className="border rounded-lg p-3"
              />
            </div>

            {/* Time Slots */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold">Select Time</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={selectedTime === time ? "bg-primary" : ""}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary and Action */}
          <div className="mt-8 pt-6 border-t">
            <div className="flex flex-col items-center justify-between gap-4">
              {selectedDate && selectedTime && (
                <p className="text-neutral-light text-center">
                  Your consultation is scheduled for{" "}
                  <span className="font-semibold text-neutral-dark">
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  at{" "}
                  <span className="font-semibold text-neutral-dark">
                    {selectedTime}
                  </span>
                </p>
              )}
              <Button
                className="w-full md:w-auto min-w-[200px]"
                onClick={handleSchedule}
                disabled={!selectedDate || !selectedTime}
              >
                Confirm Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
