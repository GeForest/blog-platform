import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../utils/post-utils/getPosts";
import { debounce } from 'lodash'


export function useGetPosts() {
    const { cursor, loading, checkedPosts, list } = useSelector(state=>state.posts)
    const dispatch = useDispatch()
    const hasFetched = useRef(false)
    const hasPosts = useRef(true)

    if(!checkedPosts) hasPosts.current = false
    
    useEffect(() => {
        list.length < 10 ? hasPosts.current = false : hasPosts.current = true
    }, [list])

    
    useEffect(()=>{
        if (!hasFetched.current) {
            hasFetched.current = true
            getPosts(dispatch, cursor)
        }
    }, [dispatch, cursor])
    
    useEffect(() => {
        const handleScroll = debounce(() => {
            if (loading || !hasPosts.current) return
            const isAtBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 200
            
            if (isAtBottom) {
                getPosts(dispatch, cursor)
            }
        }, 200)

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [dispatch, cursor, loading])

}