import {useRef, useEffect} from "react"

export const useFocus = () => {
    const ref = useRef<HTMLInputElement>(null)

        // The field current can still be null. So inside the useEffect callback we are using the
    // optional chaining operator (?.) to access it.
    useEffect(() => {
        ref.current?.focus()
    }, [])
    return ref
}
