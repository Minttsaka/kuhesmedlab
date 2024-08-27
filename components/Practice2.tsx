'use client'

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Select from 'react-select'
import { motion, AnimatePresence } from 'framer-motion'
import { countries } from 'countries-list'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, ArrowRight, Check, Loader2, X } from 'lucide-react'
import { Institution } from '@prisma/client'
import { toast } from 'sonner'
import axios from 'axios'
import { VerifyEmail } from './verify-email'

const countryOptions = Object.entries(countries).map(([code, country]) => ({
  value: code,
  label: country.name
}))

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  country: z.object({ value: z.string(), label: z.string() }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  institution: z.object({
      label: z.string().min(2, 'Institution name must be at least 2 characters'),
      value: z.string()
    }),
  age: z
  .string() // Accept string input
  .transform((value) => parseInt(value, 10)) // Convert string to number
  .refine((value) => !isNaN(value), { message: 'Age must be a valid number' }) // Ensure valid number
  .refine((value) => value >= 18, { message: 'You must be at least 18 years old' }) // Validate minimum age
  .refine((value) => value <= 120, { message: 'Invalid age' }) // Validate ma
});


type FormData = z.infer<typeof formSchema>

const steps = ['Personal Info', 'Location', 'Security', 'Additional Info']

export default function Practice2({institutions}:{institutions:Institution[]}) {
  const [currentStep, setCurrentStep] = useState(0)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const [isEmailVerify, setIsEmailVerify] = useState(false)
  const [issubmitting, setissubmitting] = useState(false)

  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      country: undefined,
      password: '',
      institution:{
        label:'',
        value:''
      },
      age:18
    }
  })

  const password = watch('password')

  React.useEffect(() => {
    const strength = calculatePasswordStrength(password)
    setPasswordStrength(strength)
  }, [password])

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0
    if (password.length >= 8) strength += 25
    if (password.match(/[a-z]/)) strength += 25
    if (password.match(/[A-Z]/)) strength += 25
    if (password.match(/[0-9]/)) strength += 25
    return strength
  }

  const institutionOptions = institutions.map((institution) => ({
    value: institution.id, 
    label: institution.name
  }));

  const onSubmit = async (data: FormData) => {

    const { 
      password,
      email,
      institution,
      age,
     fullName,
      country

  } =data;

    try {
      setissubmitting(true)
       await axios.post('/api/sign-up',{
        password,
        email,
        institution,
        age,
        name:fullName,
        country
      })

    
    } catch (error) {
      console.log(error)
    }finally{
      setIsEmailVerify(true)
      setissubmitting(false)
    }
 
    // Here you would typically send the data to your backend
    toast.success('Form submitted successfully!')
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field }) => <Input {...field} id="fullName" placeholder="John Doe" />}
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input {...field} id="email" type="email" placeholder="john@example.com" />}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>
          </>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={countryOptions}
                    placeholder="Select your country"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                )}
              />
              {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input {...field} id="password" type="password" />}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              <Progress value={passwordStrength} className="w-full" />
              <p className="text-sm text-muted-foreground">Password strength: {passwordStrength}%</p>
            </div>
          </div>
        )
      case 3:
        return (
          <>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institution">Institution</Label>
                <Controller
                  name="institution"
                  control={control}
                  render={({ field }) => 
                    <Select
                      {...field}
                      options={institutionOptions}
                      placeholder="Select Your Institution"
                      className="react-select-container "
                      classNamePrefix="react-select"
                     
                    />
                  //<Input {...field} id="institution" placeholder="University or Company" />
                  }
                />
                {errors.institution && <p className="text-sm text-red-500">{errors.institution.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Controller
                  name="age"
                  control={control}
                  render={({ field }) => (
                   <Input {...field} id="age" type="number" min={18} max={120} />
                  )}
                />
                {errors.age && <p className="text-sm text-red-500">{errors.age.message}</p>}
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <div>
      {isEmailVerify ? 
      <VerifyEmail /> :
      <Card className="w-full bg-transparent max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Sign Up for Medical Lab Research Platform</CardTitle>
          <CardDescription>Join our innovative research community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.2 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={prevStep} disabled={currentStep === 0} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          {currentStep === steps.length - 1 ? (
            <Button type='submit' onClick={handleSubmit(onSubmit)} disabled={issubmitting}>
              {issubmitting ? <Loader2  className="animate-spin" /> : <><span>Submit</span> <Check className="w-4 h-4 ml-2" /></>}
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </CardFooter>
      </Card>
      }
      
    </div>
  )
}