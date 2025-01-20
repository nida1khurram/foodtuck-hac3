import BlogPosts from '@/components/landingPage/BlogPosts'
import React from 'react'
import { Container } from '@/components/container'
import { PHeader } from '@/components/header/t2';
import { TopHeader } from '@/components/header/topHeader';
export default function Page() {
  return (
    
         <Container>
        <TopHeader />
        <PHeader title='Pages' /> 
        <BlogPosts />
        </Container>
  )
}
