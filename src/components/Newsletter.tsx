import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Newsletter = () => {
  return (
    <section className="mt-10 bg-dgreen lg:px-28 sm:px-16 px-10 py-16 flex flex-col justify-center items-center">
        <p className="text-primary-foreground text-4xl font-medium sm:text-5xl text-center mb-10">Get the best sent to your inbox, every month</p>
        <form className="w-full h-[3.2rem]  flex items-center justify-between gap-3">
        <Input className="grow outline-none h-full" placeholder="Enter your email" />
        <Button variant={"outline"} className="h-full bg-[#b8e6c3] text-black">Subscribe</Button>
        </form>
        <p className="text-primary-foreground mt-5">Once monthly, no spam</p>
      </section>
  )
}

export default Newsletter
