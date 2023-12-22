"use client"
import { AnalyticsProvider, useAnalytics } from "@/components/react-analytics";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Test() {
    return (
        <AnalyticsProvider>
            <div>Test <Link href="/">back to home</Link></div>
            <LogClick />
            <LogInput />
        </AnalyticsProvider>
    )
}

function LogClick() {
    const [ref, {onClick}] = useAnalytics<HTMLDivElement>();

    useEffect(() => onClick({event: "new_click"}), [onClick]);


    return (
        <div ref={ref}>Click Me!!!</div>
    )
}

function LogInput() {
    const [ref, {onBlur, onFocus, onChange}] = useAnalytics<HTMLInputElement>();

    useEffect(() => {
        onFocus({event: "new_focus"})
        onBlur({event: "new_blur"})
    }, [onFocus, onBlur]);


    return (
        <input ref={ref} onChange={(e) => onChange({event: "input_change", value: e.target.value})}/>
    )
}