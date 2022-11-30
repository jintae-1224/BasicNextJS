import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function CartDateSlug() {
  return (
    <div>
      <h1>CartDateSlug</h1>
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
