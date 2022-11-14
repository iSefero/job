import React from "react"

import { Flex } from "@chakra-ui/react"
import {JobCard} from "../components/JobCard";

export const JobBoard = () => {
    return(
        <Flex>
            <JobCard/>
        </Flex>
    )
}