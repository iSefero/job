// react
import React from "react"
import {useSelector} from "react-redux";

// chakra
import {Flex, useBreakpointValue} from "@chakra-ui/react"

// common
import {JobCard} from "../../components/JobCard/JobCard";
import Paginator from "react-hooks-paginator"
import "./index.css"
import {styles, stylesBreakpoints} from "./JobBoardStyles";
import {breakpoints} from "../../style/breakpoints";


export const JobBoard = () => {
  const jobOffers = useSelector(state => state.data.jobData);
  const pageLimit = 7

  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentData, setCurrentData] = React.useState([]);

  React.useEffect(() => {
    setCurrentData(jobOffers.slice(offset, offset + pageLimit));
  }, [offset, jobOffers]);

  const breakpoint = useBreakpointValue(breakpoints) || breakpoints.sm

  const jobCardLayout = currentData.map((i) =>( <JobCard key={i.id} {...i}/>))

  return(
        <Flex style={stylesBreakpoints[breakpoint].wrapper} >
          <Flex style={styles.content}>
            <Flex style={styles.offers}>
              {jobCardLayout}
            </Flex>
            <Flex width="100%" justifyContent="center">
              <Flex style={stylesBreakpoints[breakpoint].blockPagination}>
                <Paginator
                  totalRecords={jobOffers.length}
                  pageLimit={pageLimit}
                  pageNeighbours={2}
                  setOffset={setOffset}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageItemClass="item"
                  pageActiveClass="activeItem"
                  pageContainerClass="blockPagination"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
    )
}