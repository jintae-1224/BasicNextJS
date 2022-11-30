import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import SubLayout from '../../../components/SubLayout'

export async function getServerSideProps() {
  console.log('server')
  return {
    props: {},
  }
}

export default function Info() {
  const router = useRouter()
  const [click, setClick] = useState<boolean>(false)
  const { status = 'initial' } = router.query
  return (
    <div>
      <h1>Info</h1>
      <h1>Clicked {click.toString()}</h1>
      <h1>status {status}</h1>
      <button
        onClick={() => {
          alert('edit'),
            setClick(true),
            location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(repalce)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit'),
            setClick(true),
            router.push('/settings/my/info?status=editing')
        }}
      >
        edit(repalce)
      </button>
      <br />
      <button
        onClick={() => {
          alert('edit'),
            setClick(true),
            router.push('/settings/my/info?status=editing', undefined, {
              shallow: true,
            })
        }}
      >
        edit(repalce)
      </button>
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
