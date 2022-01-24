import { useEffect, useState } from "react"
import getTrendingTerms from "services/getTrendingTermsService"
import { Link } from "wouter"
import './TrendingSearches.css'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(res => {
            setTrends(res)
        })
    }, [])

    return (<div className="trendingContainer">
        {
            trends.map((trend) => (
                <div key={trend}>
                    <Link to={`/search/${trend}`}>{trend}</Link>
                </div>
            ))
        }
    </div>)
}