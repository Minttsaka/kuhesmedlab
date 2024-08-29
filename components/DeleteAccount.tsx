import { useState } from 'react'
import { AlertTriangle, Trash2, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DeleteAccount() {
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState('')

  const handleDeleteAccount = () => {
    // In a real application, you would call an API to delete the account
    console.log("Account deleted")
    setIsDeleteConfirmOpen(false)
    // Here you might redirect to a logged-out state or show a "goodbye" message
  }

  return (
    <div className="p-4 ">
      <Card className="bg-gradient-to-br from-red-50 to-orange-50">
        <CardHeader className="bg-gradient-to-r from-red-100 to-orange-100">
          <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
            <Lock className="h-6 w-6" />
            Account Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning: Irreversible Actions Ahead</AlertTitle>
            <AlertDescription>
              The actions in this section can permanently affect your account. Proceed with caution.
            </AlertDescription>
          </Alert>
          
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-red-700 mb-2">Delete Your Account</h3>
            <p className="text-sm text-gray-600 mb-4">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button
              variant="destructive"
              className="w-full bg-red-600 hover:bg-red-700"
              onClick={() => setIsDeleteConfirmOpen(true)}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDeleteConfirmOpen} onOpenChange={setIsDeleteConfirmOpen}>
        <DialogContent className="sm:max-w-[425px] bg-red-50">
          <DialogHeader>
            <DialogTitle className="text-red-800">Confirm Account Deletion</DialogTitle>
            <DialogDescription className="text-red-600">
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="confirmDelete" className="text-sm font-medium text-gray-700">
              Type DELETE to confirm
            </Label>
            <Input
              id="confirmDelete"
              value={deleteConfirmation}
              onChange={(e) => setDeleteConfirmation(e.target.value)}
              className="mt-1"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteAccount}
              disabled={deleteConfirmation !== 'DELETE'}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}