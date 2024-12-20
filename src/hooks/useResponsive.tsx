import { useCallback, useEffect, useState } from 'react'

const breakpoints = {
  mobileMax: 767,
  smallMin: 768,
  smallMax: 1023,
  mediumMin: 1024,
  mediumMax: 1279,
  largeMin: 1280,
  largeMax: 1535,
  xlargeMin: 1536,
}

export function useResponsive() {
  const [screenType, setScreenType] = useState({
    isMobile: false,
    isSmall: false,
    isMedium: false,
    isLarge: false,
    isXLarge: false,
  })
  const [mounted, setMounted] = useState(false)

  const isMoreThan = useCallback(
    (breakpoint: number) => {
      if (!mounted) return false
      return window.innerWidth >= breakpoint
    },
    [mounted],
  )

  const isLessThan = useCallback(
    (breakpoint: number) => {
      if (!mounted) return false
      return window.innerWidth <= breakpoint
    },
    [mounted],
  )

  const updateScreenSize = useCallback(() => {
    if (!mounted) return
    const { innerWidth } = window
    setScreenType({
      isMobile: innerWidth <= breakpoints.mobileMax,
      isSmall:
        innerWidth >= breakpoints.smallMin &&
        innerWidth <= breakpoints.smallMax,
      isMedium:
        innerWidth >= breakpoints.mediumMin &&
        innerWidth <= breakpoints.mediumMax,
      isLarge:
        innerWidth >= breakpoints.largeMin &&
        innerWidth <= breakpoints.largeMax,
      isXLarge: innerWidth >= breakpoints.xlargeMin,
    })
  }, [mounted])

  useEffect(() => {
    setMounted(true)
    if (mounted) {
      updateScreenSize()
      window.addEventListener('resize', updateScreenSize)
      return () => window.removeEventListener('resize', updateScreenSize)
    }
  }, [mounted, updateScreenSize])

  return {
    ...screenType,
    isMoreThan,
    isLessThan,
  }
}
