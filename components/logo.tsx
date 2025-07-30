import { cn } from '../lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            viewBox="0 0 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('text-foreground h-8 w-auto', className)}>
            {/* Icon part */}
            <rect
                x="2"
                y="2"
                width="24"
                height="24"
                rx="6"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient)'}
                className="opacity-90"
            />
            <rect
                x="6"
                y="6"
                width="16"
                height="16"
                rx="3"
                fill="white"
                className="dark:fill-black"
                opacity="0.9"
            />
            <rect
                x="10"
                y="10"
                width="8"
                height="8"
                rx="1"
                fill={uniColor ? 'currentColor' : 'url(#logo-gradient-inner)'}
            />
            
            {/* Text part */}
            <text
                x="40"
                y="22"
                className="fill-current text-foreground font-semibold text-lg"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
                Automatehub
            </text>
            
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="0"
                    y1="0"
                    x2="32"
                    y2="32"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="0.5" stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" />
                </linearGradient>
                <linearGradient
                    id="logo-gradient-inner"
                    x1="10"
                    y1="10"
                    x2="22"
                    y2="22"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#fff" />
                    <stop offset="1" stopColor="#fff" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('size-4', className)}>
            <rect
                x="1"
                y="1"
                width="14"
                height="14"
                rx="4"
                fill={uniColor ? 'currentColor' : 'url(#icon-gradient)'}
                className="opacity-90"
            />
            <rect
                x="3"
                y="3"
                width="10"
                height="10"
                rx="2"
                fill="white"
                className="dark:fill-black"
                opacity="0.9"
            />
            <rect
                x="5"
                y="5"
                width="6"
                height="6"
                rx="1"
                fill={uniColor ? 'currentColor' : 'url(#icon-gradient-inner)'}
            />
            <defs>
                <linearGradient
                    id="icon-gradient"
                    x1="1"
                    y1="1"
                    x2="15"
                    y2="15"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="0.5" stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
                <linearGradient
                    id="icon-gradient-inner"
                    x1="5"
                    y1="5"
                    x2="11"
                    y2="11"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6366F1" />
                    <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <svg
            className={cn('size-4 w-4', className)}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="3"
                y="3"
                width="26"
                height="26"
                rx="7"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
            />
            <rect
                x="7"
                y="7"
                width="18"
                height="18"
                rx="3"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.7"
            />
            <rect
                x="11"
                y="11"
                width="10"
                height="10"
                rx="1"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.5"
            />
        </svg>
    )
}
