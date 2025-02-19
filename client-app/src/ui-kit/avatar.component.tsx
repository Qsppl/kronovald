import { Root, Image, Fallback } from "@radix-ui/react-avatar"
import { cn } from "@/helpers/concat-class-names.helper"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"

export const Avatar = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
    ({ className, ...props }, ref) => (
        <Root
            ref={ref}
            className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
            {...props}
        />
    ),
)

Avatar.displayName = Root.displayName

export const AvatarImage = forwardRef<ElementRef<typeof Image>, ComponentPropsWithoutRef<typeof Image>>(
    ({ className, ...props }, ref) => (
        <Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
    ),
)

AvatarImage.displayName = Image.displayName

export const AvatarFallback = forwardRef<ElementRef<typeof Fallback>, ComponentPropsWithoutRef<typeof Fallback>>(
    ({ className, ...props }, ref) => (
        <Fallback
            ref={ref}
            className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
            {...props}
        />
    ),
)

AvatarFallback.displayName = Fallback.displayName
