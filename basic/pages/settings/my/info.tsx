import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import SubLayout from '../../../components/SubLayout'

export default function Info() {
  return (
    <div>
      <h1>Info</h1>
    </div>
  )
}

//csr 페이지에 getLayout 적용
Info.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
