import { AnimatePresence, motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import axios from "axios";
import {  X } from "lucide-react";
import { useEffect, useState } from "react"
import { PlusIcon } from '@radix-ui/react-icons';

export default function Options({id}:{id:string}) {

    const [options, setOptions] = useState<string[]>([''])
    const [lastSavedData, setLastSavedData] = useState<string[]>(['']);

    const submitData = async () => {

        try {
            await axios.post(`/api/options/${id}`,{
                options
            })
            setLastSavedData(options)

        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
          if (options !== lastSavedData) {
            submitData();
          }
        }, 1000);

        return () => clearTimeout(handler);
      }, [options, lastSavedData]);
    

    const addOption = () => {
        setOptions([...options, ''])
      }
    
      const updateOption = (index: number, value: string) => {
        const newoptions = [...options]
        newoptions[index] = value
        setOptions(newoptions)
      }
    
      const deleteOption = (index: number) => {
        const newoptions = options.filter((_, i) => i !== index)
        setOptions(newoptions)
      }

  return (
    <div className='ml-5 mb-5'>
         <div className="space-y-2">
             <Label className='text-white'>options</Label>
            <AnimatePresence initial={false}>
                {options.map((Option, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center space-x-2"
                >
                    <Input
                    value={Option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className="mt-2"
                    />
                    {index > 0 && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteOption(index)}
                        className="mt-2 rounded-full bg-[red] text-white"
                        aria-label={`Delete Option ${index + 1}`}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    )}
                </motion.div>
                ))}
            </AnimatePresence>
            <Button type="button" variant="outline" size="icon" onClick={addOption} className="mt-2 rounded-full bg-blue-900 border-none text-white">
                <PlusIcon />
            </Button>
        </div>
    </div>
  )
}
