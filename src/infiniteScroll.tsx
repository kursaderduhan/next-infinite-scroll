import React, { useState, useEffect } from 'react'
import './infiniteScroll.css'

export const InfiniteScroll = ({
  children,
  loader,
  endMessage,
  next,
  pullDown,
  feedCount = false,
  pullDownToRefreshTopDistance,
  initialLoadingCount = 0,
  externalDistance = 100,
  isRefreshing = false,
  isInitialLoading = true
}: {
  children: React.ReactNode
  loader?: any
  endMessage?: any
  next?: () => void
  pullDown?: () => void
  feedCount?: boolean
  pullDownToRefreshTopDistance?: number
  initialLoadingCount?: number
  externalDistance?: number
  isRefreshing?: boolean
  isInitialLoading?: boolean
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const [distance, setDistance] = useState<number>(externalDistance)
  const [refreshing, setIsRefreshing] = useState(isRefreshing)
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)
  const [initialLoading, setIsInitialLoading] =
    useState<boolean>(isInitialLoading)

  // Initial Loader Template
  const Loader = () => {
    return <div>{loader}</div>
  }
  useEffect(() => {
    setIsInitialLoading(initialLoadingCount > 0 && false)
  }, [initialLoadingCount])

  // ScrollBottom Template
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const clientHeight = document.documentElement.clientHeight
      const scrollHeight = document.documentElement.scrollHeight

      setIsAtBottom(scrollTop + clientHeight + distance >= scrollHeight)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isAtBottom || isLoading || feedCount) {
      return
    }
    setIsLoading(true)
    next?.()
    setTimeout(() => setIsLoading(false), 200)
  }, [isAtBottom])

  useEffect(() => {
    setDistance(externalDistance)
  }, [externalDistance])

  // Pull to refresh
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setStartY(event.touches[0].pageY)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setCurrentY(event.touches[0].pageY)
    if (currentY > startY) {
      event.preventDefault()
    }
  }

  const handleTouchEnd = () => {
    if (currentY > startY) {
      setIsRefreshing(true)
      pullDown?.()
    }
    setCurrentY(0)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ overflowY: 'scroll' }}
    >
      {initialLoading && <Loader />}
      {refreshing && (
        <div className='ptr-element'>
          <div className='loading'>
            <span className='loading-ptr-1' />
            <span className='loading-ptr-2' />
            <span className='loading-ptr-3' />
          </div>
        </div>
      )}
      <div
        style={{
          marginTop: refreshing ? `${pullDownToRefreshTopDistance}px` : 0
        }}
      >
        {children}
      </div>
      {(initialLoadingCount > 0 && feedCount ? endMessage : null) || undefined}
    </div>
  )
}

export default InfiniteScroll
