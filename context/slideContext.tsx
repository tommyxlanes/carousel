'use client'
import { createContext, useContext, useState } from "react";
import { slides } from '@/lib/data'

type Slide = {
    url: string,
    aurthor: string,
    title: string,
    topic: string,
    description: string
}

type sectionImage = (typeof slides)[number]['url']

type Props = {
    children: React.ReactNode
}

type activeSelectionType = {
    activeSelection: Slide[];
    setActiveSelection: React.Dispatch<React.SetStateAction<Slide[]>>
}

const ActiveContext = createContext<activeSelectionType | null>(null)

export const ActiveContextProvider = ({children}: Props) => {
    const [activeSelection, setActiveSelection] = useState<Slide[]>(slides)

    return (
        <ActiveContext.Provider value={{
            activeSelection,
            setActiveSelection
        }}>
            {children}
        </ActiveContext.Provider>
    )
}

export const useActiveSelection = () => {
    const context = useContext(ActiveContext)

    if(context === null) {
        throw new Error('useActiveSelection must be use within ActiveContextProvider')
    }

    return context
}