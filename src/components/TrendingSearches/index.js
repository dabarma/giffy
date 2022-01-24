import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))

export default function LazyTrendingSearches() {
    const { isNearScreen, fromRef } = useNearScreen({
        distance: '0px'
    })

    return <div ref={fromRef}>
        <Suspense fallback={'Estoy cargando ...'}>
            {isNearScreen ? <TrendingSearches /> : 'Estoy cargando ...'}
        </Suspense>
    </div>
}