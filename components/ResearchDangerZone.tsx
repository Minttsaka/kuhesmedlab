
"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangleIcon, Trash2Icon, XIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import RequestApproval from './RequestApproval'
import ResearchStatus from './ResearchStatus'
import { deleteWorkSpace } from '@/lib/actions'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'

export default function ResearchDangerZone({id, status}:{id:string, status:string}) {
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const [confirmText, setConfirmText] = useState('')
  const [shake, setShake] = useState(false)
  const [isDeleting, setIseDeleting] = useState(false)

  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (shake) {
      const timer = setTimeout(() => setShake(false), 500)
      return () => clearTimeout(timer)
    }
  }, [shake])

  const handleDeleteClick = () => {
    if (isDeleteEnabled) {
      setShowDialog(true)
    } else {
      setShake(true)
    }
  }

  const handleConfirmDelete = async() => {

    try {

      if (confirmText.toLowerCase() === 'delete my workspace') {
        console.log("deleting")
        setIseDeleting(true)
        const res = await deleteWorkSpace(id)

        if(res===true){
          router.push('/mw/dashboard')
          toast({
            title:"Deleted",
            description:"The workspace has been successfully deleted."
          })
        } else {

          toast({
            title:"Error",
            description:"Something went wrong."
          })
        }

        setShowDialog(false)
      } else {
        setShake(true)
      }
      
    } catch (error) {
      
    } finally{
      setIseDeleting(false)
    }
 
  }

  return (
    <div className="w-full mt-10 grid md:grid-cols-2" id='danger'>
      <motion.div
        className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 bg-red-50">
          <h2 className="text-2xl font-bold text-red-700 flex items-center">
            <AlertTriangleIcon className="mr-2" />
            Danger Zone
          </h2>
          <p className="mt-2 text-red-600">Critical actions that cannot be undone</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Research Workspace</h3>
              <p className="text-sm text-gray-500">Permanently remove your workspace and all its data</p>
            </div>
            <Switch
              checked={isDeleteEnabled}
              onCheckedChange={setIsDeleteEnabled}
              className="data-[state=checked]:bg-red-500"
            />
          </div>
          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
          >
            <Button
              variant="destructive"
              size="lg"
              className="w-full"
              onClick={handleDeleteClick}
              disabled={!isDeleteEnabled}
            >
              <Trash2Icon className="mr-2 h-4 w-4" />
              Delete Workspace
            </Button>
          </motion.div>
        </div>
      </motion.div>
     {status==="DEVELOPMENT" && <RequestApproval id={id!} />}
     {status==="PENDING" && <ResearchStatus id={id!} />}

      <AnimatePresence>
        {showDialog && (
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-red-600 flex items-center">
                  <AlertTriangleIcon className="mr-2" />
                  Confirm Deletion
                </DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your research workspace and remove all associated data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="confirm" className="text-right">
                    Confirm
                  </Label>
                  <Input
                    id="confirm"
                    className="col-span-3"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value)}
                    placeholder="Type 'delete my workspace' to confirm"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowDialog(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleConfirmDelete} disabled={isDeleting}>
                  Delete Workspace
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}