import React, { useState } from 'react'
import isvg from './accelerate-svgrepo-com.svg'
import ReactStars from 'react-stars'

export const Home = () => {
  const[data , setData]=useState(1)
  return (
    <div className='mx-auto'>
      <div className=' flex justify-center items-center flex-col m-20'>
        {
          data===1 ? <>
          <h1 className='font-bold text-3xl '>Which are you most intresting in?</h1>
          <p className='mt-2'>This will help us persnal your expricance</p>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-10'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Student <span className='opacity-60'>or soon to be enrolled</span> </h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Profesnal <span className='opacity-60'>pursing career</span> </h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Parent <span className='opacity-60'>of school-age child</span> </h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Lifelong learner</h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Teacher</h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Other</h1>
          </div></> :
          data===2 ? <><h1 className='font-bold text-3xl '>Which describes you best</h1>
          <p className='mt-2'>choice just one. This will help us get your started(but won't limit your expireance)</p>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-10'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Learn Spacfic skills to advance career </h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Exploring new topic i'm intersted in</h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Refraceing my math functions</h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Exercising my brain to stay sharp</h1>
          </div>
          <div className='flex items-center justify-left gap-10 px-2 w-2/4 border rounded-md mt-5'>
            <div className='p-2'>
              <img src={isvg} alt='ajdsdjs' width={30} height={30}></img>
            </div>
            <h1>Somthing else</h1>
          </div>
          </> : data===3 ? <>
    
          <div className='flex items-center justify-between gap-10 px-2 d mt-10'>
            <img src={isvg} alt='ajdsdjs' width={350} height={350}></img>
            <div className='w-2/4'>
            <h1 className='font-bold text-2xl'>You're in the right place</h1>
            <p className='mt-5 opacity-80'>You're in the right place Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.</p>
            </div>
          </div>
          </> : data===4 ?<>
          <h1 className='font-bold text-3xl '>What is your math comfort level?</h1>
          <p className='mt-2'>Choose the highest level you feel confident in - you can always adjust later.</p>
          <div className='flex items-center justify-center gap-10 rounded-md mt-10'>
            <div className='text-center border border-slate-600 py-5 px-14 rounded-md w-1/2 h-56'>
              <img src={isvg} alt='ajdsdjs' width={90} height={90}></img>
              <h1 className='mt-2'>Arethmatic</h1>
              <p className='mt-2 tracking-widest text-slate-600'>introductory</p>
            </div>
            <div className='text-center border border-slate-600 py-5 px-14 rounded-md w-1/2 h-56'>
              <img src={isvg} alt='ajdsdjs' width={90} height={90}></img>
              <h1 className='mt-2'>Basic Algebra</h1>
              <p className='mt-2 tracking-widest text-slate-600'>Fundational</p>
            </div>
            <div className='text-center border border-slate-600 py-5 px-14 rounded-md w-1/2 h-56'>
              <img src={isvg} alt='ajdsdjs' width={90} height={90}></img>
              <h1 className='mt-2'>Intermediate algebra</h1>
              <p className='mt-2 tracking-widest text-slate-600'>intermediat</p>
            </div>
            <div className='text-center border border-slate-600 py-5 px-14 rounded-md w-1/2 h-56'>
              <img src={isvg} alt='ajdsdjs' width={90} height={90}></img>
              <h1 className='mt-2'>Calculus</h1>
              <p className='mt-2 tracking-widest text-slate-600'>Advance</p>
            </div>
          </div>
          
          </> : data===5 ? <>
          <div className='flex items-center justify-between gap-10 px-2 d mt-10'>
            <img src={isvg} alt='ajdsdjs' width={350} height={350}></img>
            <div className='w-2/4'>
            <h1 className='font-bold text-2xl'>You're on your way!</h1>
            <ReactStars className='mt-5 font-bold ml-2' value={5} edit={false}/>
            <p className='mt-5 opacity-80'>
            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
            </p>
            <p className='mt-7'>- Jacob S.</p>
            </div>
          </div>
          </>
          : <></>
        }
    
        <button onClick={(()=>{setData(data+1)})} className='px-10 bg-black p-2 text-white rounded-xl mt-6'>Continue</button>
      </div>
    </div>
  )
}
