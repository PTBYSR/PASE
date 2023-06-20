import React from 'react'
import { useRouter } from 'next/router'

const CaseStudyDetail = () => {
  const router = useRouter()
  const casestudyId = router.query.casestudyId
  return (
    <div>CaseStudyDetail {casestudyId}</div>
  )
}

export default CaseStudyDetail