"use client"

import React from 'react'

const CreateAccountDrawer = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>

                </DrawerHeader>

            </DrawerContent>
        </Drawer>
    )
}

export default CreateAccountDrawer