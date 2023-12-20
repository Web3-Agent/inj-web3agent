"use client"
import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition, Disclosure } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { PROMPT_COMMANDS, MAINNET_TRANSACTION_DETAILS_BY_HASH_COMMANDS, FUSION_APIS, DEFICHAIN_DEPLOYMENT_COMMANDS, MAINNET_BLOCK_BY_HASH_COMMANDS, SWAP_TOKEN, KLAYTN_DEPLOYMENT_COMMANDS, OTHER_DEPLOYMENT_COMMANDS, MAINNET_BLOCK_BY_NUMBER_COMMANDS, MAINNET_BLOCK_NUMBER_COMMANDS, LINEA_DEPLOYMENT_COMMANDS, MAINNET_GAS_PRICE_COMMANDS, ARBITRUM_DEPLOYMENT_COMMANDS, WEB3_COMMANDS, TRANSACTION_COMMANDS, LUKSO_DEPLOYMENT_COMMANDS } from '../../constants/templates'
import { Button } from '@mui/material'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

export default function ChatOptionsSlider({ open, setOpen, setInput }: any) {
    // const [open, setOpen] = useState(true)
    const addTemplateMessageToPropmt = (template) => {
        setInput(template.message)
        setOpen(false)
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md md:max-w-lg">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute z-50 left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex h-full flex-col  overflow-y-scroll bg-white py-6 shadow-xl">
                                        {/* <div className="px-4 sm:px-6">
                                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 underline">
                                                Choose Your Command
                                            </Dialog.Title>
                                        </div> */}
                                        <div className="px-4 sm:px-4">
                                            <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                Mainnet Commands
                                            </Dialog.Title>
                                        </div>
                                        <div className=''>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-pink-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div className='text-white font-semibold'>Current Gas Price </div>
                                                                <div className='text-white'>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="">
                                                                {MAINNET_GAS_PRICE_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                            <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-pink-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div className='text-white font-semibold'>Latest Block Number </div>
                                                                <div className='text-white'>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="">
                                                                {MAINNET_BLOCK_NUMBER_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>

                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-pink-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div className='text-white font-semibold'>Block Details By Hash </div>
                                                                <div className='text-white'>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="">
                                                                {MAINNET_BLOCK_BY_HASH_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-pink-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div className='text-white font-semibold'>Block Details By Number/latest </div>
                                                                <div className='text-white'>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="">
                                                                {MAINNET_BLOCK_BY_NUMBER_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-pink-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div className='text-white font-semibold'>Transaction Details By Hash </div>
                                                                <div className='text-white'>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="">
                                                                {MAINNET_TRANSACTION_DETAILS_BY_HASH_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="px-4 sm:px-4">
                                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                    Fusion API Commands
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full bg-yellow-600 text-white  font-semibold p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div>Fusion API Commands</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {FUSION_APIS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>Info: {template?.info}</div>
                                                                        )}
                                                                        <div>Command: {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="px-4 sm:px-4">
                                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                    Contract Deployment Commands
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full bg-orange-400 text-white  font-semibold p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div>Contract Deployment Command</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {DEFICHAIN_DEPLOYMENT_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            {/* <div className="relative mt-6 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full bg-green-400 p-2 rounded-sm text-sm font-medium flex justify-between items-center">
                                                                <div>Linea Testnet Contract Deployment Command</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {LINEA_DEPLOYMENT_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="relative mt-6 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full bg-green-400 p-2 rounded-sm text-sm font-medium flex justify-between items-center">
                                                                <div>Arbitrum Goerli Contract Deployment Command</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {ARBITRUM_DEPLOYMENT_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div> */}
                                            <div className="px-4 sm:px-4">
                                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                    Transaction Commands
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-green-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div>Transaction Commands</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {TRANSACTION_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="px-4 sm:px-4">
                                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                    Portfolio Commands
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-red-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div>Portfolio Commands </div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {PROMPT_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                            <div className="px-4 sm:px-4">
                                                <Dialog.Title className="text-lg font-semibold text-gray-900">
                                                    Other Commands
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative my-3 flex-1 sm:px-4">
                                                <Disclosure>
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className="w-full text-white font-semibold bg-blue-500 p-2 rounded-sm text-sm flex justify-between items-center">
                                                                <div>WEB3 RPC Commands</div>
                                                                <div>
                                                                    {
                                                                        !open ? <IoIosArrowDropdown className='w-6 h-6' /> : <IoIosArrowDropup className='w-6 h-6' />
                                                                    }

                                                                </div>
                                                            </Disclosure.Button><Disclosure.Panel className="">
                                                                {WEB3_COMMANDS.map((template: any, index: number) => (
                                                                    <div key={template.note} className='flex flex-col  px-2 py-2 m-2 rounded-md border-dashed border text-sm font-semibold break-all'>
                                                                        <div> {template.message}</div>
                                                                        {template?.note && (
                                                                            <div className='py-1 font-normal text-xs'>{template?.note}</div>
                                                                        )}
                                                                        <div className='text-right px-2 py-1'>
                                                                                                                                                        <Button style={{backgroundColor:"green",color:"white"}} onClick={() => { console.log(template); addTemplateMessageToPropmt(template); "setTemplate(template)" }}>USE</Button>


                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>

                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
