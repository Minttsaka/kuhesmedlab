import AboutFooter from '@/components/AboutFooter'
import DashboardFinisher from '@/components/DashboarFInisher'
import Dashboard from '@/components/Dashboard'
import DashboardCarousel from '@/components/DashboardCarousel'
import DashboardFirst from '@/components/DashboardFirst'
import DashboardNotifications from '@/components/DashboardNotifications'
import DashboardSolutions from '@/components/DashboardSolutions'
import { DashboardNav } from '@/components/dashboard-nav'
import { DashboardTraining } from '@/components/dashboard-training'
import React from 'react'

export default function page() {
  return (
    <div>
        <DashboardNav />
        <DashboardCarousel />
        <Dashboard />
        <DashboardNotifications />
        <DashboardFirst />
        <DashboardSolutions />
        <DashboardTraining />
        <DashboardFinisher />
        <AboutFooter />
      
    </div>
  )
}
