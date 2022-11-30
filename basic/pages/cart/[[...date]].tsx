import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  return (
    <div>
      <h1>{JSON.stringify(date)}</h1>
      <Link href="/cart/2022/06/05">2022년6월5일</Link>
      <button onClick={() => router.push('/cart/2022/12/24')}>
        2022년12월24일
      </button>
    </div>
  )
}

//csr 페이지에 getLayout 적용
CartDateSlug.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
