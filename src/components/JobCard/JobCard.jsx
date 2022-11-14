// reac
import React from "react"
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

// chakra
import {Flex, Text, Image, useBreakpointValue} from "@chakra-ui/react";

// common
import {styles, stylesBreakpoints} from "./jobCardStyle";
import {EmptyBookmark, FullBookmark} from "../../assets/icon/icons";
import {Rating, ThinStar} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import {breakpoints} from "../../style/breakpoints";
import {setJobRecord} from "../../redux/slices/dataSlice";

const star = {
  itemShapes: ThinStar,
  activeFillColor: '#38415D',
  inactiveFillColor: '#CAD4F3',
  };

export const JobCard = (props) => {
  const [bookmarkState, setBookmarkState ] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const onClick = () => {
    dispatch(setJobRecord(props))
    navigate("/job-detail")
  }

  const bookmark = bookmarkState ? <FullBookmark/> : <EmptyBookmark/>;

  const changeBookMark = () => {
    setBookmarkState(!bookmarkState)
  };

  const breakpoint = useBreakpointValue(breakpoints) || breakpoints.sm

  return(
            <Flex onClick={onClick} style={stylesBreakpoints[breakpoint].wrapper}>
                <Flex style={stylesBreakpoints[breakpoint].avatarBlock}>
                    <Image style={stylesBreakpoints[breakpoint].avatar}  src={props?.pictures[0]}/>
                </Flex>
                <Flex style={stylesBreakpoints[breakpoint].contentWrapper} >
                    <Flex style={styles.content}>
                        <Text style={styles.mainInfo}>{props.title}</Text>
                        <Flex>
                            <Text style={styles.name}>Department name • {props.name}</Text>
                        </Flex>
                        <Text style={styles.location}>{props.address}</Text>
                    </Flex>
                    <Flex style={stylesBreakpoints[breakpoint].additionalInfo}>
                        <Flex width="100%">
                          <Rating style={{width:120}} itemStyles={star} value={rating} onChange={setRating}/>
                        </Flex>
                        <Flex style={styles.period}>
                          <Flex style={stylesBreakpoints[breakpoint].bookmark} onClick={changeBookMark}>
                            {bookmark}
                          </Flex>
                            <Text style={styles.periodText}>Posted {props.createdAt?.substr(0,10)}</Text>
                        </Flex>
                    </Flex>
                </Flex>
        </Flex>
    )
}