import { HStack } from "@chakra-ui/layout"
import { MdStar, MdStarOutline } from "react-icons/md"

export const checkRating = (rating) => {
    switch(rating) {
        case 0:
            return (
                <HStack>
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                </HStack>
            )
        case 1: 
                return (
                    <HStack>
                    <MdStar />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                </HStack>
                )
        case 2: 
                return (
                    <HStack>
                    <MdStar />
                    <MdStar />
                    <MdStarOutline />
                    <MdStarOutline />
                    <MdStarOutline />
                </HStack>
                )
        case 3: 
                return (
                    <HStack>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarOutline />
                    <MdStarOutline />
                </HStack>
                )
        case 4: 
                return (
                    <HStack>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStarOutline />
                </HStack>
                )
        case 5: 
                return (
                    <HStack>
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </HStack>
                )
        default :
        return
    }
}