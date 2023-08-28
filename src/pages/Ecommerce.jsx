import React from 'react'
import {BsCurrencyDollar} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import {Stacked, Pie ,Button, SparkLine} from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useGlobalContext } from '../context/context'

export default function Ecommerce() {

  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-lg w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-contain lg:bg-cover bg-center">
          <div className="flex items-center justify-between">
            <div className='bg-half-transparent rounded-lg p-2'>
              <p className='font-bold text-gray-200'>Earnings</p>
              <p className=' text-gray-200'>$63,488.78</p>
            </div>
          </div>
          <div className="mt-6">
              <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
              >
                
              </Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {earningData.map((item, index)=>(
            <div key={index}className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                <button type='button'
                style={{backgroundColor:item.iconBg, color:item.iconColor}}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-sm font-semibold'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-sm text-gray-400 mt-1'>
                  {item.title}
                </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 justify-center flex-wrap">
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
              <div className="flex justify-between">
                <p className='font-semibold text-xl'>
                  Revenue Updates
                </p>
                <div className="flex items-center gap-4">
                  <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                    <span>
                      <RxDotFilled/>
                    </span>
                    <span>
                     Expanse
                    </span>
                  </p>
                  <p className='flex items-center gap-2 text-green-600 hover:drop-shadow-xl'>
                    <span>
                      <RxDotFilled/>
                    </span>
                    <span>
                     Budget
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-between m-10">
                <div className="border-r-1 border-color m-4 pr-10">
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>
                        $93,438
                      </span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                        23%
                      </span>
                    </p>
                    <p className='text-gray-500 mt-1'>Budget</p>
                  </div>
                  <div className='mt-5'>
                    <p>
                      <span className='text-3xl font-semibold'>
                        $48,487
                      </span>
                    </p>
                    <p className='text-gray-500 mt-1'>Expanse</p>
                  </div>
                  <div className="mt-5">
                    <SparkLine
                      type='Line'
                      id='line-sparkline'
                      color='blue'
                      currentColor='blue'
                      height="80px"
                      width='250px'
                      data={SparklineAreaData}
                    />
                  </div>
                  <div className="mt-10">
                    <Button
                      color='white'
                      bgColor='blue'
                      text='Download Report'
                      borderRadius='10px'
                    />
                  </div>
                </div>
                <div>
                  <Stacked
                    width='320px'
                    height='360px'
                  />
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}
