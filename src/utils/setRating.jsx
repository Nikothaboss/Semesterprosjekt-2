import { HStack } from "@chakra-ui/layout"
import { MdStar, MdStarOutline } from "react-icons/md"

export const checkRating = (rating) => {
    switch(rating) {
        case 0:
            return (
                <HStack>
                    <MdStarOutline color="yellow" />
                    <MdStarOutline color="yellow" />
                    <MdStarOutline color="yellow" />
                    <MdStarOutline color="yellow" />
                    <MdStarOutline color="yellow" />
                </HStack>
            )
        case 1: 
                return (
                    <HStack>
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStarOutline color="yellow" size="2.2rem" />
                    <MdStarOutline  color="yellow" size="2.2rem"/>
                    <MdStarOutline color="yellow" size="2.2rem" />
                    <MdStarOutline  color="yellow" size="2.2rem"/>
                </HStack>
                )
        case 2: 
                return (
                    <HStack>
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStarOutline  color="yellow" size="2.2rem"/>
                    <MdStarOutline color="yellow" size="2.2rem" />
                    <MdStarOutline  color="yellow" size="2.2rem"/>
                </HStack>
                )
        case 3: 
                return (
                    <HStack>
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStarOutline color="yellow" size="2.2rem" />
                    <MdStarOutline  color="yellow" size="2.2rem"/>
                </HStack>
                )
        case 4: 
                return (
                    <HStack>
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStarOutline  size="2.2rem" color="yellow"/>
                </HStack>
                )
        case 5: 
                return (
                    <HStack>
                    <MdStar color="yellow" size="2.2rem"/>
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStar color="yellow" size="2.2rem" />
                    <MdStar  color="yellow" size="2.2rem"/>
                    <MdStar  color="yellow" size="2.2rem"/>
                </HStack>
                )
        default :
        return
    }
}