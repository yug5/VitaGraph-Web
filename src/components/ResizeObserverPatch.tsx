"use client";
import { useEffect } from "react";

export function ResizeObserverPatch() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const OriginalResizeObserver = window.ResizeObserver;
            window.ResizeObserver = class ResizeObserver extends OriginalResizeObserver {
                constructor(callback: ResizeObserverCallback) {
                    let timeoutId: NodeJS.Timeout | null = null;
                    super((entries, observer) => {
                        if (timeoutId) clearTimeout(timeoutId);
                        timeoutId = setTimeout(() => {
                            callback(entries, observer);
                        }, 100);
                    });
                }
            };
        }
    }, []);
    return null;
}
