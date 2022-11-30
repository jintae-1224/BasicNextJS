import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function UserNameInfo() {
  const router = useRouter()
  const { username, info } = router.query
  return (
    <div>
      <h1>UserName : {username}</h1>
      <h1>info : {info}</h1>
    </div>
  )
}

//csr 페이지에 getLayout 적용
UserNameInfo.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
