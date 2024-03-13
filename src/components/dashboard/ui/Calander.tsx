"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarContainer() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border bg-gray-100 -z-10"
    />
  )
}

  