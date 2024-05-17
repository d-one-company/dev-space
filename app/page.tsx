import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar';
import { Button } from '@/components/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/Dialog';
import { Switch } from '@/components/Switch';

export default function Home() {
  return (
    <>
      <Button>Upgrade now</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Switch />
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
