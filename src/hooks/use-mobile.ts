import * as React from "react"

const MOBILE_BREAKPOINT = 768

const mobileQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(onStoreChange: () => void): () => void {
  const mediaQuery = window.matchMedia(mobileQuery)
  mediaQuery.addEventListener("change", onStoreChange)

  return () => mediaQuery.removeEventListener("change", onStoreChange)
}

function getSnapshot(): boolean {
  return window.matchMedia(mobileQuery).matches
}

function getServerSnapshot(): boolean {
  return false
}

export function useIsMobile(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
