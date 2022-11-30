import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import SubLayout from '../../components/SubLayout'

export default function FirstItem() {
  return (
    <div>
      <h1>First Item</h1>
    </div>
  )
}

//csr 페이지에 getLayout 적용
FirstItem.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
