'use client'
import { createContext, useContext, useState } from "react";
import { animals, slides } from '@/lib/data'

type sectionImage = (typeof slides)[number]['url']

type Props = {
    children: React.ReactNode
}

type activeSelectionType = {
    activeSelection: number;
    setActiveSelection: React.Dispatch<React.SetStateAction<number>>
}

const ActiveContext = createContext<activeSelectionType | null>(null)

export const ActiveContextProvider = ({children}: Props) => {
    const [activeSelection, setActiveSelection] = useState<number>(0)

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