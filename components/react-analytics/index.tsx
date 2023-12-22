"use client"
import React, { useRef, useContext, useEffect, useCallback, useMemo } from "react";

const AnalyticsContext = React.createContext<boolean|null>(null)

export function AnalyticsProvider({
    children,
}: { children: React.ReactNode}) {

    return (
        <AnalyticsContext.Provider value={true}>
            { children }
        </AnalyticsContext.Provider>
    )
}

type HandlersName = 'onClick' | 'onFocus' | 'onBlur' | 'onChange'
type Event = Record<string, unknown>
// : [ref: React.RefObject<T>, handlers: Record<string, (evt: Event) => void>]
export function useAnalytics<T extends any>() {
    const ctx = useContext(AnalyticsContext);
    const ref = useRef<T>(null);
    const eventsMap = useMemo(() => new Map<HandlersName, Event>(), []);

    if (!ctx) {
        throw new Error('useAnalytics should be used inside <AnalyticsProvider />')
    }

    const onClick = useCallback((evt: Event) => {
        eventsMap.set('onClick', evt);
    }, [eventsMap]);

    const onFocus = useCallback((evt: Event) => {
        eventsMap.set('onFocus', evt);
    }, [eventsMap]);

    const onBlur = useCallback((evt: Event) => {
        eventsMap.set('onBlur', evt);
    }, [eventsMap]);

    const onChange = useCallback((evt: Event) => {
        eventsMap.set('onChange', evt);
    }, [eventsMap]);
    
    const handler = (name: HandlersName) => () => {
        const event = eventsMap.has(name) && eventsMap.get(name)
        if (event) {
            pushToDataLayer(event);
        }
    }

    useEffect(() => {
        console.log('effect')
        const node = ref.current;
        const handleClick = handler('onClick');
        const handleFocus = handler('onFocus');
        const handleBlur = handler('onBlur');
        const handleChange = handler('onChange');
        if (node) {
            (node as unknown as HTMLElement).addEventListener('click', handleClick);
            (node as unknown as HTMLElement).addEventListener('focus', handleFocus);
            (node as unknown as HTMLElement).addEventListener('blur', handleBlur);
            (node as unknown as HTMLElement).addEventListener('input', handleChange);
        }

        return () => {
            console.log('cleanup')
            if (node) {
                (node as unknown as HTMLElement).removeEventListener('click', handleClick);
                (node as unknown as HTMLElement).removeEventListener('focus', handleFocus);
                (node as unknown as HTMLElement).removeEventListener('blur', handleBlur);
                (node as unknown as HTMLElement).removeEventListener('input', handleChange);
            }
        }
    })

    const handlers = {
        onClick,
        onFocus,
        onBlur,
        onChange,
    }

    return [ref, handlers] as const;
}

function pushToDataLayer(evt: Event, namespace: any = 'datalayer') {
    window[namespace] = window[namespace] || [];

    const _dataLayer = window[namespace];

    if (Array.isArray(_dataLayer)) {
        console.log(evt);
        _dataLayer.push(evt);
    }
}