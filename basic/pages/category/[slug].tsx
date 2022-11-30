import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query
  return (
    <div>
      <h1>{slug}</h1>
      <h1>{from}</h1>
    </div>
  )
}

//csr 페이지에 getLayout 적용
CategorySlug.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
